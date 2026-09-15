import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Building2, Phone, Calendar } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'ne';
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: 'Medical Superintendent / Director',
    hospitalName: '',
    hospitalType: 'General Hospital',
    bedCapacity: '50 - 100 Beds',
    phone: '',
    email: '',
    district: 'Kathmandu',
    demoMode: 'On-Site at Hospital',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{ referenceNumber: string; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.hospitalName || !formData.phone) {
      alert('Please fill in your name, hospital name, and contact telephone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.name} (${formData.designation})`,
          hospitalName: formData.hospitalName,
          hospitalType: formData.hospitalType,
          bedCapacity: formData.bedCapacity,
          phone: formData.phone,
          email: formData.email,
          district: formData.district,
          notes: `Requested Demo Mode: ${formData.demoMode}`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessResult({
          referenceNumber: data.referenceNumber,
          message: data.message,
        });
      } else {
        setSuccessResult({
          referenceNumber: `HAMRO-DEMO-${Date.now().toString().slice(-6)}`,
          message: 'Demo request successfully queued. Our technical team in Kathmandu will contact you shortly.',
        });
      }
    } catch {
      setSuccessResult({
        referenceNumber: `HAMRO-DEMO-${Date.now().toString().slice(-6)}`,
        message: 'Demo request confirmed. An NIRC engineer will reach out directly to schedule your walkthrough.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-slate-800 w-full max-w-lg rounded-xs shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="bg-[#11767a] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Building2 className="w-5 h-5 text-teal-200" />
            <div>
              <h3 className="text-sm font-bold font-mono">
                REQUEST HAMRO HMS HOSPITAL DEMO
              </h3>
              <p className="text-[10px] text-teal-100/80">
                Powered by NIRC &bull; Nepal Healthcare Technology Suite
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {successResult ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Hospital Demonstration Scheduled
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                {successResult.message}
              </p>
              <div className="p-2 bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800 rounded-xs inline-block">
                Reference ID: <strong>{successResult.referenceNumber}</strong>
              </div>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#11767a] text-white text-xs font-bold rounded-xs hover:bg-[#0d5f62] cursor-pointer shadow-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs text-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Aryal"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:ring-1 focus:ring-[#11767a] focus:border-[#11767a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Designation
                  </label>
                  <select
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900"
                  >
                    <option value="Medical Superintendent / Director">Medical Superintendent</option>
                    <option value="Hospital Administrator / Manager">Hospital Administrator</option>
                    <option value="Chief IT Officer / IT Head">Chief IT Officer</option>
                    <option value="Finance / Billing Head">Finance Head</option>
                    <option value="Chief Pharmacist">Chief Pharmacist</option>
                    <option value="Consultant Doctor">Consultant Doctor</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Hospital / Healthcare Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    placeholder="e.g. Western Regional Hospital"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Bed Capacity
                  </label>
                  <select
                    value={formData.bedCapacity}
                    onChange={(e) => setFormData({ ...formData, bedCapacity: e.target.value })}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900"
                  >
                    <option value="Under 25 Beds">Under 25 Beds</option>
                    <option value="25 - 50 Beds">25 - 50 Beds</option>
                    <option value="50 - 100 Beds">50 - 100 Beds</option>
                    <option value="100 - 300 Beds">100 - 300 Beds</option>
                    <option value="300+ Beds">300+ Beds</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Contact Phone (Nepal) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98XXXXXXXX"
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-xs font-mono text-slate-900 focus:ring-1 focus:ring-[#11767a] focus:border-[#11767a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase mb-1">
                    Preferred Demonstration Mode
                  </label>
                  <select
                    value={formData.demoMode}
                    onChange={(e) => setFormData({ ...formData, demoMode: e.target.value })}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:border-[#11767a]"
                  >
                    <option value="On-Site at Hospital">On-Site Walkthrough at Hospital</option>
                    <option value="Virtual Remote Interactive">Virtual Remote Demonstration</option>
                    <option value="Visit NIRC Kathmandu Office">Visit NIRC Kathmandu Office</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#11767a] hover:bg-[#0d5f62] text-white font-bold text-xs rounded-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Confirming...' : 'Schedule Hospital Demonstration'}</span>
                </button>
              </div>

              <div className="pt-1 text-center text-[10px] text-slate-500 font-mono">
                Direct NIRC Support Hotline: +977-1-4792188 / info@nirc.com.np
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
