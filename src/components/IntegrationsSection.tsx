import React, { useEffect, useRef, useState } from 'react';
import { 
  Microscope, 
  Fingerprint, 
  Clock, 
  ShieldCheck, 
  Activity, 
  QrCode, 
  ShieldPlus, 
  Building2,
  CheckCircle2,
  ArrowRight,
  X
} from 'lucide-react';

interface IntegrationsSectionProps {
  language: 'en' | 'ne';
  onOpenDemo?: () => void;
}

export interface IntegrationItem {
  id: string;
  name: string;
  nameNe: string;
  badge: string;
  badgeNe: string;
  category: 'clinical' | 'hardware' | 'government' | 'payment';
  icon: React.ElementType;
  shortDesc: string;
  shortDescNe: string;
  details: string[];
  detailsNe: string[];
  protocol: string;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ 
  language,
  onOpenDemo 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<IntegrationItem | null>(null);

  const integrations: IntegrationItem[] = [
    {
      id: 'lis',
      name: 'LIS Interfacing',
      nameNe: 'एलआईएस (LIS) ल्याब',
      badge: 'Bi-Directional',
      badgeNe: 'द्वि-दिशात्मक',
      category: 'clinical',
      icon: Microscope,
      shortDesc: 'Automated bi-directional interfacing with pathology analyzers (Mindray, Sysmex, Roche, Beckman Coulter).',
      shortDescNe: 'विभिन्न प्याथोलोजी एनालाइजरहरूसँग स्वचालित द्वि-दिशात्मक डेटा ट्रान्सफर र रिपोर्ट सिंक।',
      details: [
        'ASTM & HL7 bi-directional protocol communication',
        'Direct barcode patient sample auto-recognition',
        'Eliminates manual entry errors in hematology & biochemistry',
        'Auto-verification and instant doctor EMR notification'
      ],
      detailsNe: [
        'ASTM र HL7 प्रोटोकल मार्फत उपकरण सिंक',
        'बारकोड नमूना स्वतः पहिचान',
        'ल्याब रिपोर्टमा मानवीय त्रुटि शून्य',
        'डाक्टरको ईएमआरमा तुरुन्त रिपोर्ट अपडेट'
      ],
      protocol: 'HL7 / ASTM E1381'
    },
    {
      id: 'biometric',
      name: 'Biometric Devices',
      nameNe: 'बायोमेट्रिक डिभाइस',
      badge: 'Hardware Sync',
      badgeNe: 'हार्डवेयर सिंक',
      category: 'hardware',
      icon: Fingerprint,
      shortDesc: 'Instant hardware integration for fingerprint, facial recognition, and iris scanners across all counters.',
      shortDescNe: 'औंठाछाप, फेस रिडिङ र आइरिस स्क्यानरहरूसँग काउन्टर तथा वार्डहरूमा प्रत्यक्ष हार्डवेयर जडान।',
      details: [
        'Plug & play support for ZKTeco, Realtime & Mantra devices',
        'Patient identity verification & duplicate record prevention',
        'Secure multi-tier biometric authorization for narcotic drugs',
        'High-speed USB & LAN IP network scanner polling'
      ],
      detailsNe: [
        'ZKTeco, Realtime र Mantra उपकरणहरूसँग पूर्ण उपयुक्त',
        'बिरामीको सही पहिचान र दोहोरो दर्ता रोकथाम',
        'संवेदनशील औषधि वितरणमा बायोमेट्रिक प्रमाणीकरण',
        'LAN IP तथा USB मार्फत द्रुत डेटा स्क्यानिङ'
      ],
      protocol: 'TCP/IP SDK / WebUSB'
    },
    {
      id: 'attendance',
      name: 'Staff Attendance',
      nameNe: 'कर्मचारी हाजिरी',
      badge: 'Real-time Duty',
      badgeNe: 'ड्युटी सिंक',
      category: 'hardware',
      icon: Clock,
      shortDesc: 'Automated duty roster & multi-shift attendance sync directly bound to hospital HR & payroll.',
      shortDescNe: 'अस्पतालका डाक्टर, नर्स तथा कर्मचारीहरूको सिफ्ट ड्युटी र हाजिरी पेरोलसँग स्वचालित सिंक।',
      details: [
        'Real-time clock-in/out event capturing across ward terminals',
        'Emergency on-call doctor arrival auto-logging',
        'Shift rotation, overtime & night duty tracking',
        'Integrated with monthly salary and leave ledger'
      ],
      detailsNe: [
        'वार्ड टर्मिनलहरूबाट तत्काल हाजिरी रेकर्ड',
        'आपतकालीन अन-कल डाक्टर आगमन स्वतः प्रमाणीकरण',
        'नाईट ड्युटी, ओभरटाइम र सिफ्ट व्यवस्थापन',
        'मासिक तलब र बिदा खातासँग प्रत्यक्ष आबद्ध'
      ],
      protocol: 'RESTful Push API'
    },
    {
      id: 'imis',
      name: 'IMIS Insurance',
      nameNe: 'आईएमआईएस (IMIS) बिमा',
      badge: 'Govt Certified',
      badgeNe: 'नेपाल सरकार प्रमाणित',
      category: 'government',
      icon: ShieldCheck,
      shortDesc: 'Direct API integration with Health Insurance Board (HIB) Nepal for real-time eligibility & claims.',
      shortDescNe: 'स्वास्थ्य बीमा बोर्ड (HIB) नेपालको IMIS सर्भरसँग प्रत्यक्ष रियल-टाइम बिरामी योग्यता तथा दाबी प्रमाणीकरण।',
      details: [
        'Real-time HIB card balance verification & co-payment calculation',
        'Automated ICD-11 & MoHP service package claim generation',
        'Instant claim document packaging (discharge summary, lab & prescription)',
        'Zero rejection due to pre-submission protocol validation'
      ],
      detailsNe: [
        'बीमा कार्डको मौज्दात र सह-भुक्तानी तत्काल जाँच',
        'ICD-11 कोड र सेवा प्याकेज स्वतः दाबी निर्माण',
        'डिस्चार्ज समरी, ल्याब रिपोर्ट र पुर्जी स्वतः संलग्नीकरण',
        'दाबी अस्वीकृत हुने जोखिम शून्य'
      ],
      protocol: 'HIB OpenHIE / REST'
    },
    {
      id: 'dhis2',
      name: 'DHIS2 (MoHP)',
      nameNe: 'डीएचआईएस२ (DHIS2)',
      badge: 'MoHP Standard',
      badgeNe: 'स्वास्थ्य मन्त्रालय मापदण्ड',
      category: 'government',
      icon: Activity,
      shortDesc: 'One-click automated HMIS monthly reporting to Ministry of Health and Population (MoHP) DHIS2 portal.',
      shortDescNe: 'स्वास्थ्य तथा जनसङ्ख्या मन्त्रालय (MoHP) को DHIS2 प्रणालीमा एक क्लिकमा मासिक HMIS रिपोर्टिङ।',
      details: [
        'Automated extraction of HMIS registers (OPD, Inpatient, Maternal, Lab)',
        'Built-in data validation matching MoHP national indicator definitions',
        'Direct batch upload to MoHP DHIS2 server without manual spreadsheet entry',
        'Disease surveillance, epidemic trigger alerts & morbidity breakdown'
      ],
      detailsNe: [
        'HMIS रजिस्टरहरूको स्वतः डेटा संकलन (ओपीडी, भर्ना, प्रसूति)',
        'स्वास्थ्य मन्त्रालयका सूचकअनुसार स्वतः डेटा प्रमाणीकरण',
        'म्यानुअल एक्सेल विना सीधै मन्त्रालयको DHIS2 सर्भरमा अपलोड',
        'रोग निगरानी र महामारी चेतावनी विश्लेषण'
      ],
      protocol: 'DHIS2 Web API'
    },
    {
      id: 'esewa',
      name: 'eSewa Payments',
      nameNe: 'ईसेवा तथा डिजिटल भुक्तानी',
      badge: 'Instant QR',
      badgeNe: 'द्रुत क्यूआर भुक्तानी',
      category: 'payment',
      icon: QrCode,
      shortDesc: 'Dynamic counter QR & mobile wallet payments via eSewa, Khalti, Fonepay, and bank cards.',
      shortDescNe: 'काउन्टर तथा अनलाइन अपोइन्टमेन्टको लागि ईसेवा, खल्ती, फोनपे र भिसा कार्डको गतिशील क्यूआर भुक्तानी।',
      details: [
        'Dynamic invoice-linked QR generation on billing slips & patient portal',
        'Real-time instant counter webhook confirmation (zero queue delay)',
        'Automated counter bank reconciliation & end-of-day audit trail',
        'Online doctor appointment advance payment integration'
      ],
      detailsNe: [
        'बिलिङ स्लिप र एपमा रकमसहितको डाइनामिक QR कोड',
        'तत्काल भुक्तानी पुष्टि, काउन्टरमा लाम बस्नु नपर्ने',
        'दैनिक बैंक हिसाब मिलान (Reconciliation) र अडिट रिपोर्ट',
        'अनलाइन डाक्टर टिकटको अग्रिम भुक्तानी व्यवस्था'
      ],
      protocol: 'HMAC Webhook & SDK'
    },
    {
      id: 'insurance',
      name: 'Health Insurance',
      nameNe: 'स्वास्थ्य बीमा तथा टीपीए',
      badge: 'Claim Gateway',
      badgeNe: 'दाबी गेटवे',
      category: 'government',
      icon: ShieldPlus,
      shortDesc: 'Comprehensive billing management for government schemes, corporate panels & private health insurance.',
      shortDescNe: 'सरकारी स्वास्थ्य बीमा, कर्पोरेट प्यानल र निजी स्वास्थ्य बीमा कम्पनीहरूको क्यासलेस दाबी व्यवस्थापन।',
      details: [
        'Automated panel pre-authorization & credit limit tracking',
        'Direct billing breakdown between patient co-pay and insurer deductible',
        'Digital claim ledger with electronic signature and billing attachments',
        'Support for Shikhar, Premier, Himalayan, Sanima & leading TPAs'
      ],
      detailsNe: [
        'कम्पनी पूर्व-स्वीकृति (Pre-Auth) र क्रेडिट सीमा स्वतः ट्र्याकिङ',
        'बिरामीको हिस्सा र बीमा भुक्तानीको पारदर्शी विभाजन',
        'डिजिटल हस्ताक्षरसहितको दाबी फाइल निर्माण',
        'नेपालका प्रमुख निर्जीवन बीमा कम्पनीहरूसँग सहजीकरण'
      ],
      protocol: 'ISO 27001 / Cloud API'
    },
    {
      id: 'ssf',
      name: 'SSF Scheme',
      nameNe: 'सामाजिक सुरक्षा कोष (SSF)',
      badge: 'Govt API',
      badgeNe: 'सरकारी एपीआई',
      category: 'government',
      icon: Building2,
      shortDesc: 'Direct API integration with Social Security Fund Nepal for medical scheme claims & IPD approvals.',
      shortDescNe: 'सामाजिक सुरक्षा कोष (SSF) को मेडिकल उपचार सुविधा, दुर्घटना तथा मातृत्व दाबी सीधै सिंक।',
      details: [
        'Real-time SSF contributor verification via SSF ID / Citizen Number',
        'Automated claim dispatch for OPD (Rs. 25,000) & IPD treatment ceilings',
        'Maternity and accident claim documentation auto-bundling',
        'Instant settlement reconciliation with hospital finance ledger'
      ],
      detailsNe: [
        'SSF परिचयपत्र नम्बरबाट योगदानकर्ताको तत्काल प्रमाणीकरण',
        'ओपीडी (रु २५,०००) र आइपीडी सीमाअनुसार स्वतः दाबी पेश',
        'मातृत्व र दुर्घटना उपचार कागजातको डिजिटल प्याकेज',
        'अस्पतालको लेखा प्रणालीसँग प्रत्यक्ष मिलान'
      ],
      protocol: 'SSF Nepal Govt API'
    }
  ];

  // 3D Interactive Mesh / Particle Constellation Canvas with smooth mouse interaction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D particle nodes (Plexus/constellation effect matching reference image)
    const PARTICLE_COUNT = 52;
    interface Node3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
    }

    const particles: Node3D[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.3,
        y: (Math.random() - 0.5) * height * 1.3,
        z: Math.random() * 800 - 400,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2
      });
    }

    // Mouse tilt tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      targetRotY = (mouseX / (rect.width / 2)) * 0.3;
      targetRotX = -(mouseY / (rect.height / 2)) * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const fov = 420;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const projected: { px: number; py: number; scale: number; p: Node3D }[] = [];

      // Update and project points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundaries loop
        if (p.x < -width * 0.65) p.x = width * 0.65;
        if (p.x > width * 0.65) p.x = -width * 0.65;
        if (p.y < -height * 0.65) p.y = height * 0.65;
        if (p.y > height * 0.65) p.y = -height * 0.65;
        if (p.z < -400) p.z = 400;
        if (p.z > 400) p.z = -400;

        // 3D rotation around center
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const distance = fov + z2;
        if (distance > 10) {
          const scale = fov / distance;
          const px = width / 2 + x1 * scale;
          const py = height / 2 + y2 * scale;
          projected.push({ px, py, scale, p });
        }
      }

      // Draw constellation connections in theme color (teal / ice-mint plexus web)
      const maxDistance = 150;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.32 * Math.min(projected[i].scale, projected[j].scale);
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.strokeStyle = `rgba(188, 227, 229, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes in theme color
      for (let i = 0; i < projected.length; i++) {
        const { px, py, scale, p } = projected[i];
        const r = Math.max(1, p.radius * scale);
        const alpha = Math.min(0.95, 0.4 + scale * 0.45);

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 244, 245, ${alpha})`;
        ctx.fill();

        // Subtle glow halo for prominent nodes
        if (scale > 0.85) {
          ctx.beginPath();
          ctx.arc(px, py, r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(17, 118, 122, ${alpha * 0.4})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Helper component to render an authentic flat-topped hexagon card (matching screenshot geometry)
  // Contains ONLY the icon and the text (e.g. Health Insurance), no badges, using brand theme color
  const renderHexCard = (item: IntegrationItem) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        onClick={() => setSelectedItem(item)}
        className="group relative cursor-pointer select-none transition-all duration-300 hover:scale-108 hover:z-30 w-[190px] sm:w-[210px] md:w-[225px] h-[160px] sm:h-[175px] md:h-[190px] mx-auto flex items-center justify-center"
      >
        {/* Flat-topped Hexagon Background with Hamro HMS Theme Color (#11767a) */}
        <div 
          className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:drop-shadow-[0_12px_28px_rgba(17,118,122,0.65)]"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            background: 'linear-gradient(135deg, #11767a 0%, #0d5f62 65%, #083f42 100%)',
          }}
        />

        {/* Crisp Solid White Hexagon Border (Flat-Topped SVG Polygon matching reference image) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 240 200"
          preserveAspectRatio="none"
        >
          <polygon 
            points="60,5 180,5 235,100 180,195 60,195 5,100" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="5" 
            className="group-hover:stroke-teal-200 transition-colors duration-300"
          />
        </svg>

        {/* Interior Card Content: ONLY the icon and the text, nothing else, no badges */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 py-2 w-full max-w-[160px]">
          {/* Crisp White Line-Art Icon */}
          <div className="text-white group-hover:scale-110 transition-all duration-300 mb-2">
            <Icon className="w-10 h-10 sm:w-11 sm:h-11 stroke-[1.8]" />
          </div>

          {/* Bold White Uppercase Title (e.g. Health Insurance) */}
          <h3 className="text-[11px] sm:text-xs md:text-[13px] font-black uppercase tracking-wider text-white leading-tight">
            {language === 'en' ? item.name : item.nameNe}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="integrations" 
      ref={containerRef}
      className="relative w-full text-white overflow-hidden py-6 sm:py-9 border-t border-[#11767a]/40"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #0e5b5e 0%, #0a4346 55%, #052628 100%)'
      }}
    >
      {/* 3D JS Canvas Background (Plexus / Constellation Lines reacting to Mouse) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Ambient glowing radial light flares in theme color */}
      <div className="absolute top-8 left-1/4 w-72 h-72 rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-1/4 w-72 h-72 rounded-full bg-[#11767a]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Compact Clean Header: Just small text Available Integrations */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider text-teal-100 font-sans">
            {language === 'en' ? 'Available Integrations' : 'एकीकृत प्लेटफर्म'}
          </h2>
        </div>

        {/* Honeycomb Formation (Desktop Cluster + Mobile Grid) */}
        <div className="max-w-4xl mx-auto">
          
          {/* Desktop Interlocking Honeycomb Formation */}
          <div className="hidden md:flex flex-col items-center">
            
            {/* Row 1: 3 Hexagons (LIS, Biometric, Attendance) */}
            <div className="flex items-center justify-center gap-2.5 lg:gap-4">
              {renderHexCard(integrations[0])} {/* LIS */}
              {renderHexCard(integrations[1])} {/* Biometric */}
              {renderHexCard(integrations[2])} {/* Attendance */}
            </div>

            {/* Row 2: 2 Hexagons Nestled in Valleys (IMIS, DHIS2) */}
            <div className="flex items-center justify-center gap-2.5 lg:gap-4 -mt-7 lg:-mt-9">
              {renderHexCard(integrations[3])} {/* IMIS */}
              {renderHexCard(integrations[4])} {/* DHIS2 */}
            </div>

            {/* Row 3: 3 Hexagons Nestled in Valleys (eSewa, Insurance, SSF) */}
            <div className="flex items-center justify-center gap-2.5 lg:gap-4 -mt-7 lg:-mt-9">
              {renderHexCard(integrations[5])} {/* eSewa */}
              {renderHexCard(integrations[6])} {/* Insurance */}
              {renderHexCard(integrations[7])} {/* SSF */}
            </div>

          </div>

          {/* Tablet & Mobile Flexible Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-5 sm:gap-6 justify-items-center">
            {integrations.map((item) => renderHexCard(item))}
          </div>

        </div>

      </div>

      {/* Interactive Detail Modal when user clicks any Integration Hexagon */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0a4346] border border-teal-400/30 rounded-2xl p-6 sm:p-7 shadow-2xl text-white">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header with Hexagon Avatar in theme color */}
            <div className="flex items-center space-x-4 mb-4">
              <div 
                className="w-16 h-14 flex items-center justify-center text-white shrink-0 relative"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'linear-gradient(135deg, #11767a 0%, #0d5f62 100%)',
                  border: '2px solid #ffffff'
                }}
              >
                {React.createElement(selectedItem.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <div>
                <span className="text-[11px] font-mono text-teal-200 block mb-1">
                  {selectedItem.protocol}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {language === 'en' ? selectedItem.name : selectedItem.nameNe}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-teal-50/90 leading-relaxed mb-4">
              {language === 'en' ? selectedItem.shortDesc : selectedItem.shortDescNe}
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2.5 mb-6 bg-black/25 p-4 rounded-xl border border-white/10">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-200">
                {language === 'en' ? 'Core Capabilities & Specifications' : 'मुख्य विशेषता तथा प्राविधिक मापदण्ड'}
              </h4>
              {(language === 'en' ? selectedItem.details : selectedItem.detailsNe).map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-teal-50/90">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Close' : 'बन्द गर्नुहोस्'}
              </button>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenDemo?.();
                }}
                className="px-5 py-2 rounded-lg bg-[#11767a] hover:bg-[#0d5f62] text-xs font-bold text-white transition-all shadow-md cursor-pointer flex items-center space-x-1.5"
              >
                <span>{language === 'en' ? 'Request Integration Demo' : 'डेमो अनुरोध गर्नुहोस्'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
