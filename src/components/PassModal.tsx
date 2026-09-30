import React, { useState } from 'react';
import { X, Sparkles, Check, QrCode, Download, MapPin, Zap, ShieldCheck } from 'lucide-react';

interface PassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const PassModal: React.FC<PassModalProps> = ({ isOpen, onClose, defaultProgram = '' }) => {
  const [step, setStep] = useState<'form' | 'pass'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Midtown Manhattan Flagship',
    interest: defaultProgram || 'Strength Training'
  });
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'STRV-' + Math.floor(100000 + Math.random() * 900000);
    setPassId(randomId);
    setStep('pass');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#ffffff] text-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8">
        
        {/* Header */}
        <div className="bg-[#0b0c10] p-6 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#CEF72E] flex items-center justify-center text-black font-black">
              <Zap className="w-5 h-5 fill-black" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-wider uppercase font-heading">
                STRIVE VIP DAY PASS
              </h2>
              <p className="text-[11px] text-neutral-400">100% Free · Full Facility & Class Access</p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="text-xs text-neutral-600 mb-2">
              Fill in your details below to claim your complimentary all-access 1-day pass to STRIVE FITNESS.
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-black text-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-black text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-black text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Preferred Studio
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-black text-xs sm:text-sm focus:outline-none bg-white"
                >
                  <option value="Midtown Manhattan Flagship">Midtown Manhattan (123 Fitness St)</option>
                  <option value="SoHo Performance Lab">SoHo Performance Lab</option>
                  <option value="Brooklyn Heights Studio">Brooklyn Heights Studio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Primary Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-black text-xs sm:text-sm focus:outline-none bg-white"
                >
                  <option value="Strength Training">Strength Training</option>
                  <option value="Yoga & Flexibility">Yoga & Flexibility</option>
                  <option value="Cardio & HIIT">Cardio & HIIT</option>
                  <option value="Nutrition Coaching">Nutrition Coaching</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-liquid-metal text-black font-extrabold text-sm py-3.5 rounded-xl shadow-lg shadow-[#CEF72E]/30 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Instant VIP Pass</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            {/* Digital Pass Card */}
            <div className="bg-[#0f1015] text-white rounded-2xl p-6 border-2 border-[#CEF72E] shadow-2xl relative overflow-hidden text-left">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#CEF72E] uppercase">
                    OFFICIAL GUEST PASS
                  </span>
                  <h3 className="text-xl font-black font-heading text-white">
                    {formData.fullName || 'Guest Member'}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-[#CEF72E]">{passId}</div>
                  <div className="text-[10px] text-neutral-400">Valid 7 Days</div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-neutral-300 mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
                <div>📍 <strong className="text-white">Studio:</strong> {formData.location}</div>
                <div>⚡ <strong className="text-white">Focus:</strong> {formData.interest}</div>
                <div>🛡️ <strong className="text-white">Includes:</strong> Towel service, sauna, locker & steam room</div>
              </div>

              {/* Barcode representation */}
              <div className="pt-2 flex flex-col items-center">
                <div className="h-10 w-full flex items-center justify-between gap-1 px-4 bg-white py-1 rounded">
                  {[...Array(38)].map((_, i) => (
                    <div
                      key={i}
                      className="h-full bg-black"
                      style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1)}px` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-400 font-mono mt-1 tracking-widest">
                  {passId} · PRESENT AT FRONT DESK
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert(`Pass ${passId} saved to your device! Show this code at the reception desk.`);
                }}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-bold flex items-center gap-2 hover:bg-black transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save Pass to Wallet</span>
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
