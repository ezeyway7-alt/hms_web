import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for demo inquiries
const demoRequests: Array<{
  id: string;
  name: string;
  hospitalName: string;
  hospitalType: string;
  bedCapacity: string;
  phone: string;
  email: string;
  modules: string[];
  district: string;
  createdAt: string;
}> = [];

// Lazy Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI client:", e);
    }
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    product: "Hamro HMS",
    organization: "NIRC (National Incubation & Research Center), Nepal",
    timestamp: new Date().toISOString(),
  });
});

// Demo & RFP request endpoint
app.post("/api/contact-demo", (req, res) => {
  const { name, hospitalName, hospitalType, bedCapacity, phone, email, modules, district, notes } = req.body;

  if (!name || !hospitalName || !phone) {
    return res.status(400).json({ error: "Name, hospital name, and contact phone are required." });
  }

  const record = {
    id: `HAMRO-DEMO-${Date.now().toString().slice(-6)}`,
    name: String(name).slice(0, 100),
    hospitalName: String(hospitalName).slice(0, 150),
    hospitalType: hospitalType || "General Hospital",
    bedCapacity: bedCapacity || "50-100",
    phone: String(phone).slice(0, 30),
    email: email ? String(email).slice(0, 100) : "Not provided",
    modules: Array.isArray(modules) ? modules : ["OPD", "Billing", "Pharmacy"],
    district: district || "Kathmandu Valley",
    createdAt: new Date().toISOString(),
  };

  demoRequests.unshift(record);

  return res.json({
    success: true,
    referenceNumber: record.id,
    message: "Thank you. An NIRC technical deployment consultant will reach out to schedule an on-site or virtual walkthrough.",
  });
});

// Gemini AI Healthcare Assistant for Hamro HMS
app.post("/api/ai-assist", async (req, res) => {
  const { query, hospitalType, bedCount, province } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Query is required." });
  }

  const systemInstruction = `
You are the official AI Hospital Systems Specialist for Hamro HMS, developed and powered by NIRC (National Incubation & Research Center), Nepal.
Hamro HMS website: hamrohms.nirc.com.np.
Hamro HMS is a premier enterprise Hospital Information Management System tailored for Nepal's healthcare landscape (government zonal/provincial hospitals, private super-specialty hospitals, medical colleges, ayurvedic centers, and community clinics).

Key knowledge points to include where relevant:
1. Standards & Integrations in Nepal:
   - DHIS2 (District Health Information Software 2): Automated export of MoHP Nepal indicators (HMIS monthly returns).
   - IMIS (Insurance Management Information System): Direct integration with Swasthya Bima Board (Health Insurance Board of Nepal) for paperless claim generation, e-token validation, and deduction logs.
   - LIS (Laboratory Information System): Bidirectional interfaced with automated biochemistry, hematology, and ELISA analyzers (HL7 / ASTM protocol).
   - Biometric Attendance: High-reliability fingerprint / facial recognition hardware integration (ZKTeco, Realtime).
   - Ayurvedic & Wellness: Panchakarma session tracker, Doshic evaluation records, Yoga & Physiotherapy scheduling.
   - ADHIS & EMR: Fully coded diagnoses using ICD-11, ICD-10, and Nepal MoHP essential drug formulary.
2. Architecture:
   - Hybrid deployment: High-availability on-premises local server (for zero internet downtime during peak OPD hours) with secure cloud replication.
   - Role-Based Access Control (RBAC) with detailed audit logs compliant with Nepal Data Sovereignty guidelines.
3. Modules:
   - 15 core modules: Patient Registration & EMR, OPD Clinics, Pathology (LIS), Radiology (PACS/DICOM), Pharmacy & Expiry Batch Tracking, Baby & Nutrition, Ayurvedic Care, ADHIS, Therapy, Yoga, Billing & Revenue Assurance, Inventory & Supply Chain, Staff & Attendance, Reporting & Analytics, System Administration.
4. Tone:
   - Professional, authoritative, concise, enterprise healthcare focused. Avoid fluffy marketing speak. Provide structured, actionable advice for medical superintendents, hospital directors, and IT heads.
`;

  try {
    const ai = getGeminiClient();
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemInstruction}\n\nHospital Context (if provided): Type: ${hospitalType || "General Hospital"}, Beds: ${bedCount || "Unspecified"}, Province: ${province || "Nepal"}.\n\nUser Question: ${query}`,
              },
            ],
          },
        ],
      });

      const responseText = response.text || "";
      return res.json({ answer: responseText, source: "gemini-3.8-flash" });
    }
  } catch (error) {
    console.error("Gemini API error, using enterprise fallback:", error);
  }

  // Intelligent domain fallback if no API key or network glitch
  const normalized = query.toLowerCase();
  let fallbackAnswer = "";

  if (normalized.includes("dhis2") || normalized.includes("reporting") || normalized.includes("mohp")) {
    fallbackAnswer = `Hamro HMS features built-in native integration with DHIS2 (District Health Information Software 2), complying with Nepal Ministry of Health and Population (MoHP) HMIS indicators. Monthly morbidity, mortality, immunization, maternal health, and laboratory aggregates are compiled automatically from daily OPD and Inpatient EMR data, eliminating manual clerical transcription errors and enabling one-click DHIS2 export.`;
  } else if (normalized.includes("imis") || normalized.includes("insurance") || normalized.includes("bima")) {
    fallbackAnswer = `Hamro HMS is fully integrated with the Health Insurance Board (Swasthya Bima Board) Nepal's IMIS platform. It validates insured patient eligibility via eligibility cards/tokens, automatically tags covered pharmaceuticals and diagnostic packages, prevents unapproved claims, and transmits claim batches with digitized doctor prescription attachments directly to the IMIS gateway.`;
  } else if (normalized.includes("lis") || normalized.includes("lab") || normalized.includes("pathology")) {
    fallbackAnswer = `The Pathology & LIS module supports bidirectional barcode interfacing with standard laboratory analyzers (Sysmex, Mindray, Roche, Erba) using ASTM/HL7 protocols. Test requisitions generated in OPD/IPD flow immediately into the lab queue; upon analyzer run completion, numeric results auto-populate the technician verification screen, minimizing manual entry and specimen turnaround time.`;
  } else if (normalized.includes("ayurvedic") || normalized.includes("yoga") || normalized.includes("panchakarma")) {
    fallbackAnswer = `Hamro HMS provides dedicated specialized clinical modules for Ayurvedic Hospitals, Panchakarma centers, and Naturopathy facilities. It records Prakriti/Vikriti assessments, manages multi-day Panchakarma treatment cycles, tracks traditional herbal compound formulations in the Pharmacy, and schedules therapeutic Yoga sessions under unified patient EMR.`;
  } else if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("quotation")) {
    fallbackAnswer = `Hamro HMS licensing is structured transparently based on your healthcare facility category: clinic/polyclinic, 25-50 bed community hospital, 100-300 bed zonal/provincial hospital, or medical college. It includes local server installation, data migration from legacy software, biometric terminal integration, staff training, and 24/7 dedicated NIRC engineer support. Please use the 'Request Quotation' button to receive an itemized proposal tailored to your bed count.`;
  } else {
    fallbackAnswer = `Hamro HMS by NIRC is an enterprise hospital management platform engineered for Nepal's healthcare infrastructure. It centralizes 15 modules including OPD registration, Doctor EMR, LIS Pathology, Pharmacy batch control, Billing, Biometric attendance, and native DHIS2 & IMIS government integrations. It operates reliably in hybrid offline-first mode to guarantee uninterrupted clinical workflows even during internet outages.`;
  }

  return res.json({ answer: fallbackAnswer, source: "enterprise-knowledge-base" });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Hamro HMS Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
  process.exit(1);
});
