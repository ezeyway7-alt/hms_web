import React from 'react';
import { Building2, Layers, Headphones, ShieldCheck } from 'lucide-react';

interface TrustStripProps {
  language: 'en' | 'ne';
}

export const TrustStrip: React.FC<TrustStripProps> = ({ language }) => {
  return (
    <section className="bg-[#0e5f62] border-y border-[#11767a] text-white py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-teal-800/80 items-center">
          {/* Stat 1: Government & Private Facilities EMR */}
          <div className="pt-2 md:pt-0 md:px-3 first:pt-0">
            <div className="flex items-center space-x-1.5 text-teal-200 mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-100/70">
                {language === 'en' ? 'Facilities' : 'अस्पताल'}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold tracking-tight text-white">
              Government & Private Facilities EMR
            </div>
          </div>

          {/* Stat 2: 15 Core Modules */}
          <div className="pt-2 md:pt-0 md:px-3">
            <div className="flex items-center space-x-1.5 text-teal-200 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-100/70">
                {language === 'en' ? 'Architecture' : 'प्रणाली'}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold tracking-tight text-white">
              15 Integrated Modules
            </div>
          </div>

          {/* Stat 3: DHIS2 / IMIS Standards */}
          <div className="pt-2 md:pt-0 md:px-3">
            <div className="flex items-center space-x-1.5 text-amber-300 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-100/70">
                {language === 'en' ? 'Standards' : 'मापदण्ड'}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold tracking-tight text-white">
              DHIS2 / IMIS Compliant
            </div>
          </div>

          {/* Stat 4: 24/7 Technical Support */}
          <div className="pt-2 md:pt-0 md:px-3">
            <div className="flex items-center space-x-1.5 text-teal-200 mb-1">
              <Headphones className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-100/70">
                {language === 'en' ? 'Support' : 'सहयोग'}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-bold tracking-tight text-white">
              24/7 Technical Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
