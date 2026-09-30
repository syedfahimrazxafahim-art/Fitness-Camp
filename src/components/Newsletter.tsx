import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface NewsletterProps {
  onSubscribeSuccess?: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
    if (onSubscribeSuccess) {
      onSubscribeSuccess(email);
    }
  };

  return (
    <section className="py-10 lg:py-12 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b0c10] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Block: Icon & Headline */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#CEF72E] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(206,247,46,0.35)]">
              <Mail className="w-6 h-6 text-black stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                Stay Motivated. Stay Updated.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Subscribe to get the latest tips, offers and fitness updates.
              </p>
            </div>
          </div>

          {/* Right Block: Input Form */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {isSubscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl px-5 py-3.5 flex items-center gap-3 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You&apos;re in! Check your inbox for your 15% VIP starter pass.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 bg-white rounded-2xl p-1.5 shadow-lg border border-white/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email"
                  className="px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none flex-1 rounded-xl"
                  required
                />
                <button
                  type="submit"
                  className="btn-liquid-metal text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  Subscribe
                </button>
              </form>
            )}
            {error && (
              <p className="text-xs text-rose-400 mt-2 pl-2">{error}</p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
