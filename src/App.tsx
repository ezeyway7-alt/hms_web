import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ModulesDirectory } from './components/ModulesDirectory';
import { ClientsCoverage } from './components/ClientsCoverage';
import { IntegrationsSection } from './components/IntegrationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AiAssistantWidget } from './components/AiAssistantWidget';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ne'>('en');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#11767a] selection:text-white">
      {/* 1. Hero Section with Carousel & Overlay Gradient with Centered Logo */}
      <Hero
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 2. Trust Strip with Verified Clinical Metrics */}
      <TrustStrip language={language} />

      {/* Core Hospital Modules Directory & Capabilities */}
      <ModulesDirectory
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Trusted Hospital Clients */}
      <ClientsCoverage
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 3D Interoperability & Integrations Section (LIS, Biometric, Attendance, IMIS, DHIS2, eSewa, Insurance, SSF) */}
      <IntegrationsSection 
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Official Contact & Inquiry Section */}
      <ContactSection language={language} />

      {/* Clean Hospital Footer */}
      <Footer 
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Floating Small AI Assistant Widget (Bottom Right) */}
      <AiAssistantWidget 
        language={language}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Modal: Request Demo Dialog */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        language={language}
      />
    </div>
  );
}
