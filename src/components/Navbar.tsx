import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Calculator, Sparkles, PhoneCall } from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';

interface NavbarProps {
  onOpenPassModal: () => void;
  onOpenCalcModal: () => void;
  onSelectProgram: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPassModal,
  onOpenCalcModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official Image */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="STRIVE FITNESS Home"
          >
            <div className="h-9 w-9 rounded-xl overflow-hidden bg-black border border-white/20 shadow-[0_0_15px_rgba(206,247,46,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                src={LOGO_IMAGE}
                alt="STRIVE FITNESS Logo"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white uppercase font-heading leading-tight group-hover:text-[#CEF72E] transition-colors">
                STRIVE
              </span>
              <span className="text-[9px] tracking-[0.25em] text-neutral-400 font-bold uppercase -mt-0.5">
                FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CEF72E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCalcModal}
              className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Fitness Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-[#CEF72E]" />
              <span>BMI / Calorie Tool</span>
            </button>

            <button
              onClick={onOpenPassModal}
              className="btn-liquid-metal text-black font-bold text-xs px-5 py-2.5 rounded-full cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_rgba(206,247,46,0.3)] hover:scale-105 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPassModal}
              className="btn-liquid-metal text-black font-bold text-xs px-3.5 py-2 rounded-full cursor-pointer"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl overflow-hidden bg-black border border-white/20 flex items-center justify-center">
                  <img
                    src={LOGO_IMAGE}
                    alt="STRIVE Logo"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-wider text-white uppercase font-heading">
                    STRIVE
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-neutral-400 font-bold uppercase">
                    FITNESS
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white cursor-pointer rounded-lg bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-neutral-200 hover:text-[#CEF72E] transition-colors flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-neutral-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalcModal();
              }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-200 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#CEF72E]" />
              <span>BMI & Calorie Calculator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal();
              }}
              className="w-full btn-liquid-metal text-black font-bold py-3.5 rounded-xl text-center text-sm shadow-lg shadow-[#CEF72E]/20"
            >
              Claim Free 1-Day VIP Pass
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 mt-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#CEF72E]" />
              <span>Questions? Call (212) 555-7890</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
