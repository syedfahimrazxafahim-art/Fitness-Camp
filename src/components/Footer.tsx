import React from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { LOGO_IMAGE } from '../data/mockData';

interface FooterProps {
  onSelectProgramByName: (name: string) => void;
  onOpenPassModal: () => void;
  onOpenCalcModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectProgramByName,
  onOpenPassModal,
  onOpenCalcModal
}) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' }
  ];

  const programLinks = [
    'Strength Training',
    'Yoga & Flexibility',
    'Cardio & HIIT',
    'Nutrition Coaching',
    'Personal Training',
    'Group Classes'
  ];

  const supportLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Refund Policy', href: '#refund' }
  ];

  return (
    <footer className="bg-[#07080b] text-neutral-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 group mb-4 cursor-pointer">
              <div className="h-10 w-10 rounded-xl overflow-hidden bg-black border border-white/20 shadow-[0_0_15px_rgba(206,247,46,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform">
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

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Empowering you to build a stronger body, healthier mind and better life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CEF72E] hover:text-black border border-white/10 flex items-center justify-center text-neutral-300 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CEF72E] hover:text-black border border-white/10 flex items-center justify-center text-neutral-300 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CEF72E] hover:text-black border border-white/10 flex items-center justify-center text-neutral-300 transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CEF72E] hover:text-black border border-white/10 flex items-center justify-center text-neutral-300 transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 font-heading">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs (Col 7-8) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 font-heading">
              PROGRAMS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {programLinks.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => onSelectProgramByName(name)}
                    className="hover:text-[#CEF72E] transition-colors cursor-pointer text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support (Col 9-10) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 font-heading">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us (Col 11-12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-4 font-heading">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CEF72E] shrink-0 mt-0.5" />
                <span>123 Fitness Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CEF72E] shrink-0" />
                <a href="tel:+12125557890" className="hover:text-white transition-colors">
                  +1 (212) 555-7890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CEF72E] shrink-0" />
                <a href="mailto:info@strivefitness.com" className="hover:text-white transition-colors">
                  info@strivefitness.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#CEF72E] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed">
                  <div>Mon - Sat: 6:00 AM - 10:00 PM</div>
                  <div>Sunday: 8:00 AM - 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} STRIVE FITNESS Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPassModal}
              className="text-neutral-400 hover:text-[#CEF72E] transition-colors cursor-pointer"
            >
              VIP Day Pass
            </button>
            <button
              onClick={onOpenCalcModal}
              className="text-neutral-400 hover:text-[#CEF72E] transition-colors cursor-pointer"
            >
              Fitness Calculator
            </button>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy & Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
