import React, { useState } from 'react';
import { Bot, Sparkles, X, Send, ArrowRight, Calendar, Check, MessageSquare } from 'lucide-react';

interface AiAssistantWidgetProps {
  language: 'en' | 'ne';
  onOpenDemo: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AiAssistantWidget: React.FC<AiAssistantWidgetProps> = ({
  language,
  onOpenDemo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: language === 'en' 
        ? "Namaste! I am Hamro HMS AI Assistant. Ask me anything about our IRD-certified e-billing, LIS lab machine interfacing, offline LAN resilience, or Swasthya Bima (IMIS) integration."
        : "नमस्ते! म हाम्रो HMS सहायक हुँ। हाम्रो IRD बिलिङ, ल्याब मेसिन एकीकरण वा स्वास्थ्य बीमा बारे कुनै पनि प्रश्न सोध्नुहोस्।",
      time: 'Just now',
    },
  ]);

  const quickQuestions = [
    language === 'en' ? 'How does IRD real-time e-billing work?' : 'IRD ई-बिलिङ कसरी काम गर्छ?',
    language === 'en' ? 'Which lab analyzers are supported?' : 'कुन कुन ल्याब मेसिन सपोर्ट गर्छ?',
    language === 'en' ? 'Can Hamro HMS run offline without internet?' : 'इन्टरनेट नहुँदा स्थानीय LAN मा चल्छ?',
    language === 'en' ? 'How does Swasthya Bima (IMIS) API sync?' : 'स्वास्थ्य बीमा (IMIS) कसरी जोडिएको छ?',
  ];

  const handleSend = (textToSend?: string) => {
    const question = textToSend || input.trim();
    if (!question) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate accurate, helpful clinical response
    setTimeout(() => {
      let reply = '';
      const qLower = question.toLowerCase();

      if (qLower.includes('ird') || qLower.includes('bill') || qLower.includes('कर') || qLower.includes('बिलिङ')) {
        reply = language === 'en'
          ? "Hamro HMS is 100% certified by the Inland Revenue Department (IRD) of Nepal. Invoices and credit notes automatically sync to the IRD real-time e-billing server over encrypted HTTPS with local audit-trail logging."
          : "हाम्रो HMS आन्तरिक राजस्व विभाग (IRD) द्वारा प्रमाणित छ। सबै बिल तथा क्रेडिट नोटहरू स्वतः IRD को सर्भरमा सिङ्क हुन्छन् र अडिट ट्रेल सुरक्षित रहन्छ।";
      } else if (qLower.includes('lab') || qLower.includes('analyzer') || qLower.includes('ल्याब') || qLower.includes('मेसिन') || qLower.includes('lis')) {
        reply = language === 'en'
          ? "We provide bi-directional interfacing with Mindray, Sysmex, Roche Cobas, Beckman Coulter, and Erba analyzers via RS232 serial and TCP/IP ASTM/HL7 protocols for zero manual transcription errors."
          : "हामी Mindray, Sysmex, Roche, Beckman लगायतका मेसिनहरूसँग ASTM/HL7 मार्फत सिधै द्वि-दिशात्मक (Bi-directional) रुपमा नतिजा सिङ्क गर्छौं।";
      } else if (qLower.includes('offline') || qLower.includes('internet') || qLower.includes('lan') || qLower.includes('इन्टरनेट')) {
        reply = language === 'en'
          ? "Yes! Hamro HMS runs on an on-premise local server. Even if fiber internet drops across the district, OPD registrations, doctor consultations, OT schedules, and pharmacy counters run at sub-millisecond local LAN speeds without interruption."
          : "हो! इन्टरनेट बन्द हुँदा पनि अस्पतालको आफ्नै स्थानीय LAN मा OPD, डाक्टर परामर्श र फार्मेसी बिना कुनै रुकावट उच्च गतिमा सञ्चालन हुन्छ।";
      } else if (qLower.includes('bima') || qLower.includes('imis') || qLower.includes('बीमा')) {
        reply = language === 'en'
          ? "Hamro HMS integrates directly with the Nepal Health Insurance Board (HIB) IMIS API. Patient eligibility is checked in under 2 seconds, and prescriptions and claims are submitted automatically without dual data entry."
          : "हाम्रो प्रणाली सिधै स्वास्थ्य बीमा बोर्डको IMIS API सँग जोडिएको छ। बिरामीको योग्यता २ सेकेन्डमै प्रमाणीकरण हुन्छ र दोहोरो प्रविष्टि बिना दाबी अपलोड हुन्छ।";
      } else {
        reply = language === 'en'
          ? `Thank you for asking. Hamro HMS is Nepal's premier clinical hospital management ecosystem built by NIRC. Would you like our senior engineering team to demonstrate this module live at your hospital?`
          : `धन्यवाद। हाम्रो HMS नेपालको अग्रणी अस्पताल व्यवस्थापन प्रणाली हो। थप जानकारीका लागि अस्पतालमा प्रत्यक्ष डेमो हेर्न सक्नुहुन्छ।`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Small AI Assistant Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-12 h-12 rounded-full bg-[#11767a] hover:bg-[#0d5f62] text-white flex items-center justify-center shadow-xl border-2 border-teal-200 transition-all hover:scale-110 active:scale-95 cursor-pointer group"
          title="Hamro HMS AI Assistant"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-6 h-6 text-teal-100 group-hover:text-white transition-colors" />
          
          {/* Subtle pulsating notification ring */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-900"></span>
          </span>
        </button>
      </div>

      {/* Floating AI Assistant Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-5 z-50 w-[92vw] sm:w-[380px] bg-white rounded-xs shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-scale-in"
          style={{ maxHeight: '520px' }}
        >
          {/* Window Header */}
          <div className="px-4 py-3 bg-[#11767a] text-white flex items-center justify-between border-b border-teal-800">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight flex items-center space-x-1.5">
                  <span>Hamro AI Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-teal-100/90 font-mono">
                  Nepal HMS Intelligence
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50 text-xs min-h-[220px] max-h-[300px]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-2.5 rounded-xs max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#11767a] text-white font-medium shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick FAQ Suggestion Chips */}
          <div className="p-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="shrink-0 text-[10px] bg-slate-100 hover:bg-[#e6f4f5] hover:text-[#11767a] hover:border-[#bce3e5] text-slate-700 border border-slate-200 px-2 py-1 rounded-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box & Actions */}
          <div className="p-2.5 bg-white border-t border-slate-200 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center space-x-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'en' ? 'Ask about modules, IRD, LIS...' : 'मोड्युल, IRD वा ल्याब बारे सोध्नुहोस्...'}
                className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-xs focus:outline-hidden focus:border-[#11767a] text-slate-800"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#11767a] hover:bg-[#0d5f62] text-white rounded-xs text-xs font-semibold flex items-center transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-between pt-1 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemo();
                }}
                className="text-[10px] font-bold text-[#11767a] hover:underline flex items-center space-x-1 cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-amber-500" />
                <span>Book Hospital Demo</span>
              </button>
              <span className="text-[9px] text-slate-400 font-mono">NIRC Enterprise</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
