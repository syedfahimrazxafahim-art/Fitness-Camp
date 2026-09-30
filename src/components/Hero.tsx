import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';
import { FlipText } from './FlipText';

interface HeroProps {
  onOpenVideoModal: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenVideoModal,
  onExplorePrograms
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#0b0c10] text-white flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Ambience & Atmospheric Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#CEF72E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#CEF72E]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#CEF72E] uppercase font-heading">
                DISCOVER THE STRONGER YOU
              </span>
            </div>

            {/* Main Headline with 3D Flip capability */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-black leading-[0.95] tracking-tight text-white mb-6 uppercase font-heading select-none">
              <span className="block hover:text-neutral-100 transition-colors">
                <FlipText text="TRAIN HARD" as="span" />
              </span>
              <span className="block text-[#CEF72E] drop-shadow-[0_0_25px_rgba(206,247,46,0.3)]">
                <FlipText text="LIVE STRONG" as="span" highlightWords={['LIVE', 'STRONG']} highlightClass="text-[#CEF72E]" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8 font-normal">
              We help you build strength, boost confidence and achieve your fitness goals with expert guidance and support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <button
                onClick={onExplorePrograms}
                className="btn-liquid-metal text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer shadow-[0_10px_25px_rgba(206,247,46,0.35)] transition-all hover:gap-4 active:scale-95"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>

              <button
                onClick={onOpenVideoModal}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-white/20 transition-all cursor-pointer text-white text-sm sm:text-base font-semibold backdrop-blur-md active:scale-95"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CEF72E] group-hover:text-black transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Properly Framed Fitness Hero without floating badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            
            {/* Athlete Frame Container with Clean View */}
            <div className="relative w-full max-w-[440px] lg:max-w-[480px] h-[500px] sm:h-[560px] lg:h-[620px] flex items-end justify-center group">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute -inset-4 bg-radial from-[#CEF72E]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* High-Resolution Athlete Image properly fitted in frame */}
              <img
                src={HERO_IMAGE}
                alt="STRIVE Fitness Athlete"
                className="w-full h-full object-cover object-top rounded-3xl filter contrast-[1.08] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/hero_fitness_woman_1790725936880.jpg';
                }}
              />
              
              {/* Bottom gradient fade so athlete blends seamlessly */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/60 to-transparent z-10 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
