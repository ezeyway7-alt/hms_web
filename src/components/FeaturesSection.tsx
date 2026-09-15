import React from 'react';
import { 
  Building2, Users, FileCheck, Clock, Fingerprint, 
  Microscope, ShieldCheck, Pill, CreditCard, BarChart3, Network, Check 
} from 'lucide-react';
import { KEY_FEATURES } from '../data/hmsData';

interface FeaturesSectionProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  Building2,
  Users,
  FileCheck,
  Clock,
  Fingerprint,
  Microscope,
  ShieldCheck,
  Pill,
  CreditCard,
  BarChart3,
  Network,
};

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ language, onOpenDemo }) => {
  return (
    <section id="features" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono font-semibold rounded-xs mb-2">
              <span>DESIGNED FOR NEPAL HEALTHCARE REALITIES</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? 'Built Around Real Hospital Workflows' : 'वास्तविक अस्पताल कार्यप्रवाह अनुरूप निर्मित'}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-700">
              {language === 'en'
                ? 'Every screen, order set, and verification step has been hardened through thousands of patient interactions in Nepal’s government, private, and teaching hospitals.'
                : 'नेपालका सरकारी, निजी र शिक्षण अस्पतालहरूमा हजारौँ बिरामीहरूको वास्तविक उपचार प्रक्रियाबाट प्रमाणित सुदृढ कार्यप्रणाली।'}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenDemo}
              className="px-3.5 py-1.5 bg-[#11767a] hover:bg-[#0d5f62] text-white text-[11px] font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Request Customized Feature Spec' : 'विस्तृत स्पेसिफिकेशन प्राप्त गर्नुहोस्'}
            </button>
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_FEATURES.map((feat) => {
            const Icon = iconMap[feat.iconName] || Building2;
            return (
              <div
                key={feat.id}
                className="bg-white border border-slate-200 p-4 rounded-xs hover:border-[#11767a]/60 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 bg-[#e6f4f5] border border-[#bce3e5] text-[#11767a] flex items-center justify-center rounded-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-300 rounded-xs">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Nepali */}
                  <h3 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? feat.title : feat.titleNe}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                    {feat.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1">
                    {feat.details.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[10px] text-slate-700 font-medium">
                        <Check className="w-3 h-3 text-[#11767a] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Hamro HMS Core</span>
                  <span className="text-[#11767a] font-semibold">&bull; Active in Nepal</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
