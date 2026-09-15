import React, { useState, useEffect, useRef } from 'react';

interface ClientsCoverageProps {
  language: 'en' | 'ne';
  onOpenDemo?: () => void;
}

interface ClientLogo {
  id: string;
  name: string;
  sub: string;
  type: 'emblem-red' | 'tech-blue' | 'script-dark' | 'shield-vg' | 'cup-black' | 'crest-green' | 'hosp-blue';
}

export const ClientsCoverage: React.FC<ClientsCoverageProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Exactly matching the client branding styles from the reference image:
  // 1. Lord Buddha Niketan School/Hospital (red circular emblem)
  // 2. MK TECH SOLUTIONS (bold tech blue with circular bracket)
  // 3. MOZZO (bold black signature script)
  // 4. VG College / Hospital Biratnagar (bicolor shield emblem)
  // 5. WakeCup Coffee / Pharma (pin-point coffee emblem)
  // 6. Arniko College / Medical Institute Biratnagar (green crest emblem)
  // 7. Plus reputable medical center institutions in Nepal
  const clients: ClientLogo[] = [
    {
      id: 'lord-buddha',
      name: 'Lord Buddha',
      sub: 'Hospital & Institute',
      type: 'emblem-red',
    },
    {
      id: 'mk-tech',
      name: 'MK TECH',
      sub: 'SOLUTIONS',
      type: 'tech-blue',
    },
    {
      id: 'mozzo',
      name: 'mo33o',
      sub: 'HEALTHCARE',
      type: 'script-dark',
    },
    {
      id: 'vg-college',
      name: 'VG Hospital',
      sub: 'Biratnagar',
      type: 'shield-vg',
    },
    {
      id: 'wakecup',
      name: 'WakeCup',
      sub: 'Diagnostics & Care',
      type: 'cup-black',
    },
    {
      id: 'arniko',
      name: 'Arniko Medical',
      sub: 'Biratnagar',
      type: 'crest-green',
    },
    {
      id: 'tilganga-network',
      name: 'Himalayan Care',
      sub: 'Referral Clinic',
      type: 'hosp-blue',
    },
    {
      id: 'gandaki-med',
      name: 'Gandaki Health',
      sub: 'Research Wing',
      type: 'tech-blue',
    },
  ];

  // Auto cycle active dot
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [clients.length]);

  return (
    <section id="clients" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching user reference image exactly:
            OUR CLIENTS —————————
            TRUSTED BY TOP BRANDS IN NEPAL */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs sm:text-[13px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
              {language === 'en' ? 'OUR CLIENTS' : 'हाम्रा सेवाग्राहीहरू'}
            </span>
            <div className="w-14 h-[1px] bg-slate-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight uppercase font-sans">
            {language === 'en' ? 'TRUSTED BY TOP BRANDS IN NEPAL' : 'नेपालका प्रमुख संस्थाहरूद्वारा विश्वास गरिएको'}
          </h2>
        </div>

        {/* Horizontal Logo Strip */}
        <div 
          ref={scrollRef}
          className="flex items-center justify-between gap-8 sm:gap-12 overflow-x-auto scrollbar-none py-4 px-2"
        >
          {clients.map((client, idx) => (
            <div
              key={client.id}
              onClick={() => setActiveIndex(idx)}
              className="flex items-center space-x-3 shrink-0 cursor-pointer transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
            >
              {/* Logo SVG rendering based on reference styling */}
              {client.type === 'emblem-red' && (
                <div className="flex items-center space-x-2.5">
                  <div className="w-11 h-11 rounded-full border-2 border-red-500 flex items-center justify-center p-1 text-red-600">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current stroke-2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight tracking-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight font-sans">
                      {client.sub}
                    </div>
                  </div>
                </div>
              )}

              {client.type === 'tech-blue' && (
                <div className="flex items-center space-x-1.5">
                  <div className="flex items-center text-[#11767a] font-extrabold text-lg tracking-tighter">
                    <span className="text-xl font-mono text-[#11767a] mr-0.5">&#x3008;</span>
                    <span className="border-y-2 border-[#11767a] px-1 py-0.5 rounded-xs">MK</span>
                    <span className="text-xl font-mono text-[#11767a] ml-0.5">&#x3009;</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-slate-900 tracking-wider">
                      TECH
                    </div>
                    <div className="text-[9px] font-mono tracking-widest text-slate-600">
                      SOLUTIONS
                    </div>
                  </div>
                </div>
              )}

              {client.type === 'script-dark' && (
                <div className="text-left py-1">
                  <div className="text-2xl font-black italic tracking-tighter text-slate-900 font-serif lowercase select-none">
                    mo33o
                  </div>
                </div>
              )}

              {client.type === 'shield-vg' && (
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-11 relative flex items-center justify-center">
                    <svg viewBox="0 0 24 28" className="w-full h-full drop-shadow-2xs">
                      <path 
                        d="M12 1L2 5v9c0 7.5 10 13 10 13s10-5.5 10-13V5L12 1z" 
                        fill="#1e3a8a" 
                      />
                      <path 
                        d="M12 1v26c0 0 10-5.5 10-13V5L12 1z" 
                        fill="#ea580c" 
                      />
                      <circle cx="12" cy="11" r="3" fill="#ffffff" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      VG College
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight">
                      Biratnagar
                    </div>
                  </div>
                </div>
              )}

              {client.type === 'cup-black' && (
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-900">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      WakeCup
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight">
                      Coffee & Care
                    </div>
                  </div>
                </div>
              )}

              {client.type === 'crest-green' && (
                <div className="flex items-center space-x-2.5">
                  <div className="w-10 h-11 relative flex items-center justify-center">
                    <svg viewBox="0 0 24 28" className="w-full h-full">
                      <path 
                        d="M12 1L3 5v8c0 7 9 14 9 14s9-7 9-14V5L12 1z" 
                        fill="#15803d" 
                      />
                      <circle cx="12" cy="11" r="3.5" fill="#ffffff" />
                      <path d="M12 9v4M10 11h4" stroke="#15803d" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      Arniko College
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight">
                      Biratnagar
                    </div>
                  </div>
                </div>
              )}

              {client.type === 'hosp-blue' && (
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xs bg-[#11767a] text-white flex items-center justify-center font-bold text-xs">
                    HMC
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      Himalayan Care
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight">
                      Medical Center
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching user reference image exactly */}
        <div className="flex items-center justify-center space-x-2 mt-8 sm:mt-10">
          {clients.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveIndex(dotIndex)}
              aria-label={`Go to client slide ${dotIndex + 1}`}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                dotIndex === activeIndex
                  ? 'w-3 h-3 bg-[#11767a] scale-110'
                  : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
