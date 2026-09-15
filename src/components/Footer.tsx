import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ne';
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenDemo }) => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#062c2e] via-[#083c3e] to-[#052325] text-white overflow-hidden select-none border-t border-teal-900/60">
      
      {/* 
        TOP SECTION:
        Clean Deep Teal Canvas with floating white rounded-bottom bowl card
      */}
      <div className="relative w-full pt-0 pb-12 sm:pb-16 overflow-hidden">
        
        {/* Center Floating White Card: Dipping smoothly into the Dark Teal canvas */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl mx-auto px-4">
          <div className="bg-white text-slate-900 rounded-b-[60px] sm:rounded-b-[80px] md:rounded-b-[100px] shadow-[0_16px_40px_rgba(4,22,23,0.45)] px-6 sm:px-12 pt-8 sm:pt-10 pb-10 sm:pb-12 text-center border-b border-x border-teal-100/60">
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#11767a] tracking-tight font-sans">
              {language === 'en' ? "We'd Love to Hear from you!" : 'हामी तपाईंसँग कुरा गर्न उत्सुक छौं!'}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed mt-3 font-normal">
              {language === 'en'
                ? 'Whether you are curious about the features, a comprehensive demo, or sharing your hospital requirements with us, our team is ready to answer any and all your questions.'
                : 'चाहे तपाईं सफ्टवेयरका सुविधाहरू बारे बुझ्न चाहनुहुन्छ, विस्तृत डेमो हेर्न चाहनुहुन्छ वा अस्पतालका आवश्यकताहरू साझा गर्न चाहनुहुन्छ—हाम्रो टोली तपाईंका सम्पूर्ण प्रश्नहरूको समाधान गर्न तत्पर छ।'}
            </p>

            {/* Primary Action Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={onOpenDemo}
                id="footer-schedule-meeting-button"
                className="inline-flex items-center space-x-2.5 px-6 sm:px-8 py-3 bg-[#11767a] hover:bg-[#0d5f62] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer border border-teal-600/40 group"
              >
                <span>{language === 'en' ? 'Schedule a Hospital Meeting' : 'अस्पताल छलफल तय गर्नुहोस्'}</span>
                <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* 
        MAIN FOOTER DIRECTORY SECTION
        Rich Deep Teal Theme
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-2 pb-12">
        {/* Brand Header with prominent logo */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-teal-800/60 gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white rounded-md shadow-xs flex items-center justify-center">
              <img
                src="https://hamrohms.nirc.com.np/static/assets/img/HMS.png"
                alt="Hamro HMS"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                HAMRO HMS <span className="text-teal-300 font-normal">&bull; Enterprise Health Suite</span>
              </div>
              <p className="text-xs text-teal-100/80 mt-0.5">
                {language === 'en'
                  ? 'Digital health infrastructure engineered for hospitals across Nepal'
                  : 'नेपालभरका स्वास्थ्य संस्थाहरूका लागि निर्मित आधुनिक अस्पताल सूचना प्रणाली'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono">
            <span className="px-2.5 py-1 bg-teal-900/80 border border-teal-700/60 text-teal-200 rounded-xs">
              MoHP IMIS / DHIS2
            </span>
            <span className="px-2.5 py-1 bg-teal-900/80 border border-teal-700/60 text-teal-200 rounded-xs">
              IRD Certified E-Billing
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: QUICK LINKS */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-teal-200 uppercase mb-4">
              {language === 'en' ? 'QUICK LINKS' : 'द्रुत लिङ्कहरू'}
            </h3>
            <ul className="space-y-2 text-xs text-teal-100/80 font-normal">
              <li>
                <a href="#hero" className="hover:text-teal-300 transition-colors">
                  {language === 'en' ? 'Overview' : 'अवलोकन'}
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  {language === 'en' ? 'Hospital Modules' : 'अस्पताल मोड्युलहरू'}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-teal-300 transition-colors">
                  {language === 'en' ? 'Clients & Coverage' : 'सेवाग्राही अस्पतालहरू'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-300 transition-colors">
                  {language === 'en' ? 'Contact Us' : 'सम्पर्क'}
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-teal-300 transition-colors">
                  {language === 'en' ? 'Integrations' : 'एकीकरण'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: MODULES & SUITES */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-teal-200 uppercase mb-4">
              {language === 'en' ? 'PRODUCTS & SUITES' : 'उत्पादन तथा मोड्युलहरू'}
            </h3>
            <ul className="space-y-2 text-xs text-teal-100/80 font-normal">
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  Hamro HMS Enterprise
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  OPD & IPD Billing <span className="text-[10px] text-teal-300 font-mono">(IRD)</span>
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  LIS & PACS Interfacing
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  Pharmacy Inventory & DDA
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  Swasthya Bima (IMIS)
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-teal-300 transition-colors">
                  Electronic Medical Record (EMR)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-teal-200 uppercase mb-4">
              {language === 'en' ? 'GET IN TOUCH' : 'सम्पर्क विवरण'}
            </h3>
            <div className="space-y-2 text-xs text-teal-100/80 font-normal leading-relaxed">
              <p>
                National Incubation & Research Center (NIRC)<br />
                Kathmandu, Nepal
              </p>
              <p>
                <span className="text-teal-300 font-medium">Hospital Inquiries: </span>
                <a href="tel:+97715908234" className="hover:text-teal-300 text-white transition-colors font-mono">
                  +977-1-5908234
                </a>
              </p>
              <p>
                <span className="text-teal-300 font-medium">NIRC Lab: </span>
                <a href="tel:+97714112233" className="hover:text-teal-300 text-white transition-colors font-mono">
                  +977-1-4112233
                </a>
              </p>
              <p className="break-all">
                <a href="mailto:info@hamrohms.com" className="hover:text-teal-300 text-white transition-colors">
                  info@hamrohms.com
                </a>
              </p>
              <p className="break-all">
                <a href="https://nirc.com.np" target="_blank" rel="noreferrer" className="hover:text-teal-300 text-teal-300 transition-colors font-mono">
                  www.nirc.com.np
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: FOLLOW US */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-teal-200 uppercase mb-4">
              {language === 'en' ? 'CONNECT WITH US' : 'सामाजिक सञ्जाल'}
            </h3>
            
            {/* Social Icons in circular outline badges matching theme */}
            <div className="flex items-center space-x-3 mb-6">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-teal-500/50 hover:border-teal-300 hover:bg-teal-600/30 flex items-center justify-center transition-all cursor-pointer text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-teal-500/50 hover:border-teal-300 hover:bg-teal-600/30 flex items-center justify-center transition-all cursor-pointer text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>

            <div className="p-2.5 bg-teal-900/60 border border-teal-800/80 rounded-xs text-[11px] text-teal-100/90 leading-relaxed">
              Serving government, private, and community healthcare facilities nationwide.
            </div>
          </div>

        </div>

        {/* Bottom Copyright & NIRC Technology Attribution */}
        <div className="mt-10 pt-6 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-100/80">
          <div>
            &copy; {new Date().getFullYear()} Hamro HMS. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-teal-200/80">Engineered & Incubated by</span>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-teal-900/80 border border-teal-700/60">
              <span className="font-extrabold tracking-wider text-white text-xs font-mono">NIRC</span>
              <div className="flex flex-col text-[8px] leading-tight">
                <span className="text-teal-300 font-semibold uppercase tracking-wider">Nepal</span>
                <span className="text-[7px] text-teal-100/70 italic">Health Innovation</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
};
