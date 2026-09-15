import React from 'react';
import { Phone, Mail, ShieldCheck, Globe2, Building } from 'lucide-react';

interface TopBarProps {
  language: 'en' | 'ne';
  setLanguage: (lang: 'en' | 'ne') => void;
  onOpenDemo: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ language, setLanguage, onOpenDemo }) => {
  return (
    <div className="bg-[#0b4e51] text-slate-100 border-b border-[#0e5f62] text-xs py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Organization & Compliance */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex items-center space-x-1.5 text-teal-200 font-medium">
            <Building className="w-3.5 h-3.5 text-teal-300" />
            <span className="tracking-wide">National Incubation & Research Center (NIRC)</span>
          </div>
          <span className="text-teal-700/60 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center space-x-1 text-teal-200 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
            <span>MoHP Nepal Standard &bull; DHIS2 / IMIS Certified</span>
          </div>
        </div>

        {/* Right: Hotline, Email & Language Switcher */}
        <div className="flex items-center space-x-3 sm:space-x-5 text-slate-200">
          <a
            href="tel:+97714112233"
            className="flex items-center space-x-1 hover:text-white transition-colors"
            title="24/7 Hospital NOC Technical Support"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">+977-1-4792188 / 9801000000</span>
          </a>

          <a
            href="mailto:info@nirc.com.np"
            className="hidden md:flex items-center space-x-1 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-teal-300" />
            <span className="text-[11px]">info@nirc.com.np</span>
          </a>

          <div className="flex items-center space-x-1 border-l border-teal-700/60 pl-3">
            <Globe2 className="w-3.5 h-3.5 text-teal-300" />
            <button
              onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
              className="px-1.5 py-0.5 text-[11px] font-semibold bg-[#083a3d] hover:bg-[#0d4f52] border border-teal-600/40 rounded-xs text-slate-100 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'नेपाली' : 'English'}
            </button>
          </div>

          <button
            onClick={onOpenDemo}
            className="bg-[#11767a] hover:bg-[#0d5f62] text-white px-2.5 py-0.5 font-medium text-[11px] rounded-xs transition-colors hidden lg:inline-block cursor-pointer border border-teal-400/40"
          >
            {language === 'en' ? 'Hospital Demo' : 'डेमो अनुरोध'}
          </button>
        </div>
      </div>
    </div>
  );
};
