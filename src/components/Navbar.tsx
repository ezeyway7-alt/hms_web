import React, { useState } from 'react';
import { Menu, X, Globe2, FileText } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'ne';
  setLanguage?: (lang: 'en' | 'ne') => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: language === 'en' ? 'Overview' : 'गृहपृष्ठ', href: '#hero' },
    { name: language === 'en' ? 'Modules' : 'मोड्युलहरू', href: '#modules' },
    { name: language === 'en' ? 'Clients' : 'सेवाग्राहीहरू', href: '#clients' },
    { name: language === 'en' ? 'Integrations' : 'एकीकरण', href: '#integrations' },
    { name: language === 'en' ? 'Contact' : 'सम्पर्क', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Official Hamro HMS Logo (Enlarged) */}
          <a href="#hero" className="flex items-center group py-1.5" aria-label="Hamro HMS">
            <img
              src="https://hamrohms.nirc.com.np/static/assets/img/HMS.png"
              alt="Hamro HMS"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[260px] object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#11767a] py-1 border-b-2 border-transparent hover:border-[#11767a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-3">
            {setLanguage && (
              <button
                onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-700 hover:text-[#11767a] bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title={language === 'en' ? 'नेपालीमा हेर्नुहोस् (Switch to Nepali)' : 'Switch to English'}
                aria-label="Toggle language"
              >
                {language === 'en' ? 'ने' : 'EN'}
              </button>
            )}

            <button
              onClick={onOpenDemo}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#11767a] hover:bg-[#0d5f62] border border-[#0a494c] rounded-xs shadow-xs transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'en' ? 'Request Quote' : 'कोटेशन अनुरोध'}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            {setLanguage && (
              <button
                onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-700 bg-slate-100 border border-slate-300"
                title="Toggle Language"
              >
                {language === 'en' ? 'ने' : 'EN'}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-xs bg-slate-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 border-b border-slate-100 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xs"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#11767a] hover:bg-[#0d5f62] text-white text-sm font-semibold rounded-xs shadow-xs"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>{language === 'en' ? 'Request Quote' : 'कोटेशन अनुरोध'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
