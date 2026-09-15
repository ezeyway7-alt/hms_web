import React from 'react';
import { Building, ShieldCheck, Cpu, Code2, Users, ArrowUpRight, Award, MapPin } from 'lucide-react';

interface NircSectionProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

export const NircSection: React.FC<NircSectionProps> = ({ language, onOpenDemo }) => {
  return (
    <section id="nirc" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-300 rounded-xs p-6 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: NIRC Identity & Branding */}
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-xs border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#11767a] border border-teal-400/50 flex items-center justify-center rounded-xs shadow-xs text-white">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-teal-300 block">
                      TECHNOLOGY INCUBATOR
                    </span>
                    <span className="text-xl font-extrabold text-white tracking-tight">
                      NIRC
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-300 tracking-wide font-sans">
                  National Incubation & Research Center, Nepal
                </div>
                <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>

              <div className="p-3 bg-slate-800/80 border border-slate-700 text-[11px] space-y-2 rounded-xs font-mono">
                <div className="text-teal-300 font-bold uppercase text-[10px]">Institutional Mandate</div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  Driving digital healthcare transformation, enterprise software engineering, and public health innovation across Nepal.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                Official Portal: <a href="https://nirc.com.np" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline font-mono">nirc.com.np</a>
              </div>
            </div>

            {/* Right Column: Organization Details & Capabilities */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-[#e6f4f5] text-[#11767a] border border-[#bce3e5] text-[10px] font-mono font-semibold rounded-xs">
                <span>ENGINEERED & POWERED IN NEPAL</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                Powered by NIRC
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <strong>Hamro HMS is powered by NIRC (National Incubation & Research Center)</strong>, combining deep healthcare domain understanding with modern technology, robust infrastructure, agile software development, and ongoing technical support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-[11px]">
                    <Code2 className="w-3.5 h-3.5 text-[#11767a]" />
                    <span>In-House Software Engineering</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Customized specifically for Nepal’s hospital workflows, clinical terminologies, and tax regulatory requirements.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-[11px]">
                    <Cpu className="w-3.5 h-3.5 text-[#11767a]" />
                    <span>Infrastructure & Hardware Lab</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Local server clustering, biometric terminal testing, and bidirectional lab analyzer interfacing certifications.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-slate-900 font-bold text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Nepal Data Sovereignty</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Patient records remain within hospital premises or sovereign Nepal data center instances with zero foreign telemetry.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xs space-y-1">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs">
                    <Users className="w-4 h-4 text-[#11767a]" />
                    <span>On-Site Deployment Team</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experienced hospital implementation specialists who train doctors, nurses, cashiers, and lab technicians in person.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="https://nirc.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xs flex items-center space-x-1.5 transition-colors"
                >
                  <span>Learn More About NIRC</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenDemo}
                  className="px-4 py-2 bg-[#11767a] hover:bg-[#0d5f62] text-white text-xs font-bold rounded-xs transition-colors cursor-pointer shadow-xs"
                >
                  Schedule Consult With NIRC Engineers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
