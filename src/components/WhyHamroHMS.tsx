import React from 'react';
import { 
  Layers, Network, Sliders, TrendingUp, BarChart3, 
  Headphones, Check, X, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/hmsData';

interface WhyHamroHMSProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

export const WhyHamroHMS: React.FC<WhyHamroHMSProps> = ({ language, onOpenDemo }) => {
  const pillars = [
    {
      title: 'Comprehensive',
      titleNe: 'पूर्ण एकीकृत',
      desc: 'Multiple hospital departments united in one platform — from OPD triage to ICU, pathology, pharmacy, and IRD-compliant billing.',
      icon: Layers,
    },
    {
      title: 'Integrated',
      titleNe: 'प्रणाली समन्वय',
      desc: 'Connects seamlessly with DHIS2, LIS laboratory analyzers, IMIS Swasthya Bima, and fingerprint biometric attendance.',
      icon: Network,
    },
    {
      title: 'Flexible',
      titleNe: 'लचिलो अनुकूलन',
      desc: 'Configurable for 25-bed community clinics, 200-bed zonal hospitals, super-specialty private institutes, or Ayurvedic centers.',
      icon: Sliders,
    },
    {
      title: 'Scalable',
      titleNe: 'विस्तारयोग्य',
      desc: 'Engineered to handle high-concurrency peak morning OPD registrations without software slowdown or database deadlocks.',
      icon: TrendingUp,
    },
    {
      title: 'Data Driven',
      titleNe: 'तथ्यांकमा आधारित',
      desc: 'Real-time operational dashboards provide medical directors and board members clear visibility into bed occupancy, ALOS, and revenue.',
      icon: BarChart3,
    },
    {
      title: 'Supported',
      titleNe: 'स्थानीय प्राविधिक सहयोग',
      desc: 'Backed by NIRC technical engineers in Kathmandu with 24/7 emergency response, on-site deployment, and staff training.',
      icon: Headphones,
    },
  ];

  return (
    <section id="why-us" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-7">
          <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-[#e6f4f5] border border-[#bce3e5] text-[#11767a] text-[10px] font-mono font-semibold rounded-xs mb-2">
            <span>ENTERPRISE VALUE PROPOSITION</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            {language === 'en'
              ? 'Why Healthcare Organizations Choose Hamro HMS'
              : 'स्वास्थ्य संस्थाहरूले किन हाम्रो HMS रोज्दछन्?'}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {language === 'en'
              ? 'Unlike piecemeal software or foreign systems lacking Nepal regulatory alignment, Hamro HMS delivers complete clinical compliance, zero-latency local operation, and local engineering accountability.'
              : 'नेपालको स्वास्थ्य मन्त्रालयका नीति, स्वास्थ्य बीमा बोर्ड र स्थानीय अस्पतालका विशिष्ट चुनौतीहरूलाई पूर्ण रूपमा सम्बोधन गर्ने नेपालकै भरपर्दो प्रणाली।'}
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-slate-50 border border-slate-200 p-4 rounded-xs hover:border-[#11767a] hover:bg-white transition-all shadow-2xs"
              >
                <div className="w-8 h-8 bg-[#e6f4f5] border border-[#bce3e5] text-[#11767a] flex items-center justify-center rounded-xs mb-2.5 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {language === 'en' ? pillar.title : pillar.titleNe}
                </h3>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner with Action CTA */}
        <div className="p-6 bg-[#11767a] text-white rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-lg font-bold">Ready to modernize your hospital operations?</h4>
            <p className="text-xs text-teal-100 mt-1">
              Contact our Kathmandu engineering team for an on-site demonstration and custom proposal.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-3 bg-[#0d5f62] hover:bg-[#09474a] border border-teal-300/40 text-white font-bold text-xs rounded-xs flex items-center space-x-2 shrink-0 transition-colors cursor-pointer"
          >
            <span>Request System Demonstration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
