import React, { useRef, useState, useEffect } from 'react';
import { 
  Microscope, Stethoscope, Pill, Receipt, Bed, 
  ShieldCheck, Activity, HeartPulse, Users, Fingerprint,
  Check, Calendar, X, Sparkles
} from 'lucide-react';

interface ModulesDirectoryProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

interface HexModuleItem {
  id: string;
  name: string;
  nameNe: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgGradient: string;
  summary: string;
  features: string[];
}

const MODULE_ROW_ITEMS: HexModuleItem[] = [
  {
    id: 'lab-lis',
    name: 'Pathology Lab',
    nameNe: 'प्याथोलोजी ल्याब',
    subtitle: 'LIS Analyzers',
    icon: Microscope,
    accentColor: '#10b981',
    borderColor: 'rgba(16, 185, 129, 0.45)',
    bgGradient: 'from-[#062c20] via-[#09221a] to-[#041611]',
    summary: 'Bi-directional interfacing with Mindray, Sysmex, Roche & Beckman. Automated barcode accessioning & digital pathologist validation.',
    features: [
      'Bidirectional analyzer interfacing (RS232/TCP)',
      'Phlebotomy barcoding & delta checks',
      'Normal/panic value automated SMS alerts',
      'NPHL quality compliance & e-signatures',
    ],
  },
  {
    id: 'doctor-emr',
    name: 'Doctor EMR',
    nameNe: 'डाक्टर ईएमआर',
    subtitle: 'Clinical Notes',
    icon: Stethoscope,
    accentColor: '#0ea5e9',
    borderColor: 'rgba(14, 165, 233, 0.45)',
    bgGradient: 'from-[#072d4a] via-[#092238] to-[#041424]',
    summary: 'Streamlined doctor consultation screen with past medical histories, vitals graphing, ICD-11 coding, and one-click e-prescriptions.',
    features: [
      'Master Patient Index (UHID / QR)',
      'Integrated OPD & IPD clinical notes',
      'One-click e-prescriptions with pharmacy auto-sync',
      'WHO ICD-11 & MoHP standard coding',
    ],
  },
  {
    id: 'pharmacy-store',
    name: 'Pharmacy',
    nameNe: 'फार्मेसी',
    subtitle: 'Dispensary & Store',
    icon: Pill,
    accentColor: '#38bdf8',
    borderColor: 'rgba(56, 189, 248, 0.45)',
    bgGradient: 'from-[#082942] via-[#071f33] to-[#03111d]',
    summary: 'Real-time retail dispensary and central drug store inventory with FEFO/FIFO batch tracking and early expiry alerts.',
    features: [
      'OPD & IPD counter billing & dispensing',
      'Batch tracking, expiry & MRP controls',
      'Departmental indenting & safety buffer alerts',
      'DDA controlled narcotics register',
    ],
  },
  {
    id: 'ipd-wards',
    name: 'Inpatient Wards',
    nameNe: 'भर्ना तथा वार्ड',
    subtitle: 'Bed Matrix & OT',
    icon: Bed,
    accentColor: '#f43f5e',
    borderColor: 'rgba(244, 63, 94, 0.45)',
    bgGradient: 'from-[#38101a] via-[#260c13] to-[#14060a]',
    summary: 'Live bed occupancy matrix, nursing kardex, vital sign charting, surgical operation scheduling, and automated ward charge tracking.',
    features: [
      'Real-time bed & ward allocation matrix',
      'Nursing station kardex & drug administration logs',
      'OT scheduling & surgeon notes',
      'Automated discharge summary with ICD codes',
    ],
  },
  {
    id: 'opd-triage',
    name: 'OPD & Tokens',
    nameNe: 'ओपिडी दर्ता',
    subtitle: 'Queue Scheduling',
    icon: Users,
    accentColor: '#f59e0b',
    borderColor: 'rgba(245, 158, 11, 0.45)',
    bgGradient: 'from-[#382408] via-[#241706] to-[#140c03]',
    summary: 'Sub-30 second patient registration, smart token queue management, and colour-coded emergency triage for fast clinical flow.',
    features: [
      'Sub-30 second patient card printing',
      'Smart token queue displays for doctor rooms',
      'Emergency red/yellow/green triage tags',
      'Specialty clinic appointment bookings',
    ],
  },
  {
    id: 'ird-billing',
    name: 'IRD E-Billing',
    nameNe: 'राजस्व ई-बिलिङ',
    subtitle: 'Certified Real-time',
    icon: Receipt,
    accentColor: '#a855f7',
    borderColor: 'rgba(168, 85, 247, 0.45)',
    bgGradient: 'from-[#2e0e47] via-[#1f0a30] to-[#12051d]',
    summary: 'Certified real-time Inland Revenue Department (IRD) API synchronization with support for cash, QR, cards, and corporate credit.',
    features: [
      '100% compliant with Nepal IRD real-time API',
      'Cash, Fonepay QR, eSewa & card settlements',
      'Multi-counter day-end closing & cash handover',
      'Deposit ledger & refund management',
    ],
  },
  {
    id: 'swasthya-bima',
    name: 'Swasthya Bima',
    nameNe: 'स्वास्थ्य बीमा',
    subtitle: 'HIB IMIS API',
    icon: ShieldCheck,
    accentColor: '#06b6d4',
    borderColor: 'rgba(6, 182, 212, 0.45)',
    bgGradient: 'from-[#082d36] via-[#052026] to-[#031317]',
    summary: 'Direct integration with Nepal Health Insurance Board (HIB IMIS API) for instant patient eligibility verification and claim submissions.',
    features: [
      'Real-time IMIS policy eligibility verification',
      'Automated Bima claim generation & prescription linking',
      'Eliminates claim rejection & manual upload delay',
      'Co-payment calculation & government quota tracking',
    ],
  },
  {
    id: 'radiology-pacs',
    name: 'Radiology PACS',
    nameNe: 'रेडियोलोजी',
    subtitle: 'DICOM Imaging',
    icon: Activity,
    accentColor: '#6366f1',
    borderColor: 'rgba(99, 102, 241, 0.45)',
    bgGradient: 'from-[#191d4d] via-[#101336] to-[#090b21]',
    summary: 'Integrated RIS and web-based zero-footprint DICOM PACS viewer for direct review of X-Ray, CT, MRI, and Ultrasound in EMR.',
    features: [
      'Zero-footprint web DICOM viewer',
      'Direct modality worklist (MWL) integration',
      'Radiologist voice dictation & report templating',
      'High-res image review inside doctor EMR',
    ],
  },
  {
    id: 'emergency-247',
    name: 'Emergency 24/7',
    nameNe: 'आकस्मिक सेवा',
    subtitle: 'Ambulance & Triage',
    icon: HeartPulse,
    accentColor: '#ef4444',
    borderColor: 'rgba(239, 68, 68, 0.45)',
    bgGradient: 'from-[#3b0d0d] via-[#260808] to-[#140404]',
    summary: 'Fast-track triage for critical cases, resus allocations, emergency stock registers, and medico-legal case (MLC) tracking.',
    features: [
      'Triage severity categorisation (ESI scale)',
      'Immediate bedside orders & stat lab processing',
      'Police MLC register & medico-legal forms',
      'Direct shift-to-ICU / OT transfer pathways',
    ],
  },
  {
    id: 'admin-hr',
    name: 'Biometrics & HR',
    nameNe: 'हाजिरी तथा प्रशासन',
    subtitle: 'Duty Rostering',
    icon: Fingerprint,
    accentColor: '#eab308',
    borderColor: 'rgba(234, 179, 8, 0.45)',
    bgGradient: 'from-[#382d06] via-[#241c04] to-[#141002]',
    summary: 'Biometric attendance hardware integration (ZKTeco/eSSL), doctor duty rosters, asset tracking, and MoHP DHIS2 data extracts.',
    features: [
      'Direct sync with biometric fingerprint/face devices',
      'Doctor & nurse shift rostering & leave management',
      'Biomedical asset maintenance calibration logs',
      'Automated MoHP DHIS2 monthly health extracts',
    ],
  },
];

export const ModulesDirectory: React.FC<ModulesDirectoryProps> = ({
  language,
  onOpenDemo,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedModule, setSelectedModule] = useState<HexModuleItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Subtle auto-scroll loop for the requested "scroll animations"
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 1.5, behavior: 'auto' });
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section 
      id="modules" 
      className="relative w-full bg-[#062c2e] bg-gradient-to-r from-[#042021] via-[#083b3d] to-[#0c4e51] text-white pt-1 sm:pt-2 pb-6 sm:pb-8 border-b border-teal-900/60 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#169398_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      {/* SVG Hexagon ClipPath Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="point-hex-clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Horizontal Row of Hexagons (One by One) with smooth scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 sm:py-3 px-2 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {MODULE_ROW_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedModule(item)}
                className="group relative shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:scale-105"
                style={{
                  width: '165px',
                  height: '190px',
                }}
              >
                {/* Hexagon Outer Glowing Border */}
                <div
                  className="w-full h-full relative p-[2px] transition-all duration-300 group-hover:drop-shadow-[0_8px_20px_rgba(56,189,248,0.25)]"
                  style={{
                    clipPath: 'url(#point-hex-clip)',
                    backgroundColor: item.borderColor,
                  }}
                >
                  {/* Hexagon Inner Container with Dark Gradient */}
                  <div
                    className={`w-full h-full bg-gradient-to-b ${item.bgGradient} flex flex-col items-center justify-center px-3 text-center relative overflow-hidden transition-all duration-300 group-hover:brightness-110`}
                    style={{
                      clipPath: 'url(#point-hex-clip)',
                    }}
                  >
                    {/* Subtle Radial Glow Behind Icon */}
                    <div 
                      className="absolute w-20 h-20 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Icon Container with Subtle Float / Pulse on Hover */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-115 group-hover:rotate-3 shadow-inner"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${item.borderColor}`,
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: item.accentColor }}
                      />
                    </div>

                    {/* Module Title */}
                    <div className="text-xs font-bold text-white tracking-tight leading-tight line-clamp-1 group-hover:text-teal-200 transition-colors">
                      {language === 'en' ? item.name : item.nameNe}
                    </div>

                    {/* Module Subtitle */}
                    <div 
                      className="text-[10px] font-mono font-medium mt-0.5 opacity-80 line-clamp-1"
                      style={{ color: item.accentColor }}
                    >
                      {item.subtitle}
                    </div>

                    {/* Bottom Micro Indicator Dot */}
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: item.accentColor }}
                    />

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal on Hexagon Click */}
      {selectedModule && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className="bg-white text-slate-900 max-w-lg w-full rounded-xs shadow-2xl overflow-hidden border border-slate-300 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="p-5 text-white flex items-center justify-between"
              style={{ backgroundColor: '#11767a' }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-xs flex items-center justify-center bg-white/10 border border-white/20"
                >
                  <selectedModule.icon 
                    className="w-5 h-5" 
                    style={{ color: selectedModule.accentColor }}
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold leading-tight">
                    {language === 'en' ? selectedModule.name : selectedModule.nameNe}
                  </h3>
                  <span className="text-xs font-mono opacity-80" style={{ color: selectedModule.accentColor }}>
                    {selectedModule.subtitle}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedModule(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedModule.summary}
              </p>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Key Capabilities:
                </div>
                <div className="space-y-1.5">
                  {selectedModule.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-800">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    onOpenDemo();
                  }}
                  className="px-4 py-2 bg-[#11767a] hover:bg-[#0d5f62] text-white text-xs font-bold rounded-xs transition-colors flex items-center space-x-1.5 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>Request Module Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
