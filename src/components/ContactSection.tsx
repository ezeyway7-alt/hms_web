import React, { useState } from 'react';
import { 
  User, Phone, Mail, MessageSquare, Send, CheckCircle2, MapPin
} from 'lucide-react';

interface ContactSectionProps {
  language: 'en' | 'ne';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full bg-white overflow-hidden">
      {/* Top Standard Curved Header with Brand Theme (#11767a) Gradient (Height slightly smaller) */}
      <div className="relative w-full bg-gradient-to-r from-[#0d5f62] via-[#11767a] to-[#168f94] pt-9 pb-26 sm:pt-11 sm:pb-30 px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Subtle decorative glowing shapes */}
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-72 h-72 rounded-full bg-teal-300/10 blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 font-sans">
            {language === 'en' ? 'Have Some Question?' : 'केही जिज्ञासा छ?'}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl mx-auto font-sans">
            {language === 'en' ? (
              <>
                Thank you for your interest in our services. Please fill out the form below or e-mail us at{' '}
                <a href="mailto:info@hamrohms.com" className="text-teal-200 font-semibold hover:underline">
                  info@hamrohms.com
                </a>{' '}
                and we will get back to you promptly regarding your request.
              </>
            ) : (
              <>
                हाम्रो सेवामा रुचि देखाउनुभएकोमा धन्यवाद। कृपया तलको फारम भर्नुहोस् वा{' '}
                <a href="mailto:info@hamrohms.com" className="text-teal-200 font-semibold hover:underline">
                  info@hamrohms.com
                </a>{' '}
                मा इमेल गर्नुहोस्, हामी तुरुन्तै सम्पर्क गर्नेछौं।
              </>
            )}
          </p>
        </div>

        {/* Organic Flowing Wave Divider */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg 
            viewBox="0 0 1440 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 md:h-20 text-white preserve-3d"
          >
            <path 
              d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z" 
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Area: Left Illustration & Contact Info + Right Contact Form */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Graphic Illustration & Get In Touch Details */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start pt-1">
            
            {/* Custom SVG Illustration: Envelope, Red Phone, Coffee Cup & Support Agent */}
            <div className="w-full max-w-xs sm:max-w-sm h-48 sm:h-54 relative flex items-center justify-center select-none mb-4">
              
              {/* Background ambient leaves & floating dots */}
              <div className="absolute top-2 left-6 w-10 h-10 bg-teal-100 rounded-full blur-md opacity-60" />
              <div className="absolute bottom-4 right-8 w-14 h-14 bg-purple-100 rounded-full blur-md opacity-70" />
              
              <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xs">
                <defs>
                  <linearGradient id="envelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>

                {/* Background soft foliage & @ symbol */}
                <path d="M120,70 Q140,50 160,70 T200,70" fill="none" stroke="#a7f3d0" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
                <path d="M70,110 Q90,90 110,110" fill="none" stroke="#6ee7b7" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
                
                {/* Floating @ bubble */}
                <circle cx="105" cy="95" r="16" fill="#38bdf8" opacity="0.2" />
                <text x="98" y="101" fill="#0284c7" fontSize="18" fontWeight="bold" fontFamily="sans-serif">@</text>

                {/* Speech bubbles */}
                <rect x="235" y="75" width="28" height="18" rx="6" fill="#facc15" />
                <circle cx="242" cy="84" r="2" fill="#854d0e" />
                <circle cx="249" cy="84" r="2" fill="#854d0e" />
                <circle cx="256" cy="84" r="2" fill="#854d0e" />

                {/* Letter / Paper Sheet */}
                <rect x="115" y="85" width="150" height="150" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="3" />
                {/* Ruled lines on sheet */}
                <line x1="130" y1="110" x2="220" y2="110" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="125" x2="245" y2="125" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="140" x2="235" y2="140" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="155" x2="225" y2="155" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="170" x2="200" y2="170" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" />

                {/* Big Golden Yellow Envelope */}
                <path d="M100,135 L190,195 L280,135 L280,240 L100,240 Z" fill="url(#envelopeGrad)" />
                <path d="M100,240 L175,185" stroke="#b45309" strokeWidth="2" opacity="0.4" />
                <path d="M280,240 L205,185" stroke="#b45309" strokeWidth="2" opacity="0.4" />

                {/* Classic Red Telephone Handset & curly wire */}
                <path d="M105,190 Q90,210 95,225 T110,235" fill="none" stroke="#ef4444" strokeWidth="3" />
                <g transform="translate(85, 105) rotate(-25)">
                  {/* Phone receiver */}
                  <rect x="0" y="0" width="22" height="75" rx="10" fill="url(#phoneGrad)" />
                  <circle cx="11" cy="14" r="14" fill="#dc2626" />
                  <circle cx="11" cy="61" r="14" fill="#dc2626" />
                  <circle cx="11" cy="14" r="5" fill="#991b1b" />
                  <circle cx="11" cy="61" r="5" fill="#991b1b" />
                </g>

                {/* Coffee Cup with Saucer */}
                <g transform="translate(235, 205)">
                  <path d="M5,10 Q5,30 20,30 Q35,30 35,10 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M35,14 Q43,14 43,20 Q43,26 35,26" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                  <ellipse cx="20" cy="32" rx="20" ry="3" fill="#cbd5e1" />
                  {/* Steam */}
                  <path d="M15,4 Q18,0 15,-4" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
                  <path d="M24,4 Q21,0 24,-4" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.6" />
                </g>

                {/* Blue Info Badge */}
                <circle cx="135" cy="235" r="18" fill="#0284c7" />
                <circle cx="135" cy="227" r="2.5" fill="#ffffff" />
                <rect x="133" y="233" width="4" height="11" rx="2" fill="#ffffff" />

                {/* Friendly Support Specialist Illustration */}
                <g transform="translate(265, 95)">
                  {/* Headset & Hair */}
                  <ellipse cx="28" cy="20" rx="13" ry="14" fill="#1e293b" />
                  {/* Face */}
                  <ellipse cx="25" cy="24" rx="9" ry="10" fill="#fed7aa" />
                  {/* Headset band & mic */}
                  <path d="M16,18 Q25,8 35,18" fill="none" stroke="#0f172a" strokeWidth="3" />
                  <circle cx="15" cy="22" r="3.5" fill="#0284c7" />
                  <path d="M16,24 Q18,32 26,30" fill="none" stroke="#0f172a" strokeWidth="2" />
                  <circle cx="27" cy="30" r="2" fill="#0284c7" />
                  {/* Body / Blouse */}
                  <path d="M15,35 Q28,33 40,35 L45,95 L10,95 Z" fill="#ea580c" />
                  {/* Arms */}
                  <path d="M12,40 L-2,65 L10,65" fill="none" stroke="#ea580c" strokeWidth="7" strokeLinecap="round" />
                  {/* Hands */}
                  <circle cx="10" cy="65" r="4" fill="#fed7aa" />
                  {/* Trousers */}
                  <rect x="15" y="95" width="13" height="70" fill="#1e40af" />
                  <rect x="29" y="95" width="13" height="70" fill="#1d4ed8" />
                  {/* Shoes */}
                  <ellipse cx="20" cy="166" rx="7" ry="3" fill="#0f172a" />
                  <ellipse cx="36" cy="166" rx="7" ry="3" fill="#0f172a" />
                </g>
              </svg>
            </div>

            {/* "Get in touch" Header & Underline */}
            <div className="w-full text-left mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-1.5 font-sans">
                {language === 'en' ? 'Get in touch' : 'सम्पर्क विवरण'}
              </h3>
              <div className="w-12 h-[2px] bg-slate-300" />
            </div>

            {/* Contact Information List with Rounded Circular Brand Theme Accents */}
            <div className="space-y-3 w-full">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full border border-[#bce3e5] bg-[#e6f4f5] flex items-center justify-center text-[#11767a] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a 
                    href="tel:+97715908234" 
                    className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#11767a] transition-colors"
                  >
                    +977-1-5908234 / +977-9801234567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full border border-[#bce3e5] bg-[#e6f4f5] flex items-center justify-center text-[#11767a] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a 
                    href="mailto:info@hamrohms.com" 
                    className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#11767a] transition-colors"
                  >
                    info@hamrohms.com / contact@nirc.com.np
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full border border-[#bce3e5] bg-[#e6f4f5] flex items-center justify-center text-[#11767a] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  NIRC Technology Park, Tinkune, Kathmandu, Nepal
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Floating Form Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-6 relative">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'en' ? 'Message Sent Successfully!' : 'सन्देश सफलतापूर्वक पठाइयो!'}
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {language === 'en' 
                      ? 'Thank you for reaching out. Our hospital engineering team will contact you promptly.' 
                      : 'सम्पर्क गर्नुभएकोमा धन्यवाद। हाम्रो प्राविधिक टोलीले चाँडै सम्पर्क गर्नेछ।'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Send Another Message' : 'अर्को सन्देश पठाउनुहोस्'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  
                  {/* First Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder={language === 'en' ? 'First Name *' : 'पहिलो नाम *'}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#11767a] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder={language === 'en' ? 'Last Name' : 'थर'}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#11767a] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={language === 'en' ? 'Phone *' : 'फोन नम्बर *'}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#11767a] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'en' ? 'Email *' : 'इमेल *'}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#11767a] focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'en' ? 'Message' : 'सन्देश'}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#11767a] focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Standard Brand Theme Action Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-3 px-5 rounded-lg bg-[#11767a] hover:bg-[#0d5f62] active:scale-[0.99] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? (
                        <span>{language === 'en' ? 'SENDING...' : 'पठाउँदै...'}</span>
                      ) : (
                        <span>{language === 'en' ? 'SUBMIT' : 'पठाउनुहोस्'}</span>
                      )}
                    </button>
                  </div>

                  {/* Privacy Footnote matching screenshot */}
                  <div className="pt-1 text-center">
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {language === 'en'
                        ? 'Hamro HMS does not sell, share, or trade customer information. Your privacy is very important to us.'
                        : 'हाम्रो HMS ले ग्राहकको जानकारी कसैसँग साझा गर्दैन। तपाईंको गोपनीयता हाम्रो प्राथमिकता हो।'}
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
