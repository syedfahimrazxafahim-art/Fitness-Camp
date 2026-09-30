import React from 'react';
import { ArrowRight, Users, Trophy, Calendar, Flame } from 'lucide-react';
import { MOTIVATION_IMAGE } from '../data/mockData';
import { CounterNumber } from './CounterNumber';

interface MotivationProps {
  onStartJourney: () => void;
}

export const Motivation: React.FC<MotivationProps> = ({ onStartJourney }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Dark Hero Motivation Card */}
          <div className="lg:col-span-7 bg-[#0f1015] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row relative group">
            {/* Image Section */}
            <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-neutral-900 shrink-0">
              <img
                src={MOTIVATION_IMAGE}
                alt="Trainer pushing limits"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0f1015] md:w-16 md:right-0 md:left-auto" />
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-1 z-10">
              <span className="text-xs font-bold tracking-[0.2em] text-[#CEF72E] uppercase block mb-2 font-heading">
                BE YOUR BEST
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4 font-heading">
                Your Only Limit Is You
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                We believe fitness is not just about the body, it&apos;s about the mind, attitude and lifestyle.
              </p>
              <div>
                <button
                  onClick={onStartJourney}
                  className="btn-liquid-metal text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#CEF72E]/20 hover:gap-3 transition-all"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Impact Metrics Grid */}
          <div className="lg:col-span-5 bg-[#FAFBF6] rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-6 font-heading">
                OUR IMPACT IN NUMBERS
              </span>

              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {/* Metric 1: 10K+ */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F976] flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="w-5 h-5 text-[#2c3803]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono leading-none">
                      <CounterNumber target={10} suffix="K+" />
                    </div>
                    <div className="text-xs text-neutral-600 font-medium mt-1">
                      Members Joined
                    </div>
                  </div>
                </div>

                {/* Metric 2: 150+ */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F976] flex items-center justify-center shrink-0 shadow-sm">
                    <Trophy className="w-5 h-5 text-[#2c3803]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono leading-none">
                      <CounterNumber target={150} suffix="+" />
                    </div>
                    <div className="text-xs text-neutral-600 font-medium mt-1">
                      Fitness Programs
                    </div>
                  </div>
                </div>

                {/* Metric 3: 98% */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F976] flex items-center justify-center shrink-0 shadow-sm">
                    <Calendar className="w-5 h-5 text-[#2c3803]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono leading-none">
                      <CounterNumber target={98} suffix="%" />
                    </div>
                    <div className="text-xs text-neutral-600 font-medium mt-1">
                      Member Satisfaction
                    </div>
                  </div>
                </div>

                {/* Metric 4: 500K+ */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F976] flex items-center justify-center shrink-0 shadow-sm">
                    <Flame className="w-5 h-5 text-[#2c3803]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono leading-none">
                      <CounterNumber target={500} suffix="K+" />
                    </div>
                    <div className="text-xs text-neutral-600 font-medium mt-1">
                      Workouts Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/80 text-[11px] text-neutral-500 flex items-center justify-between">
              <span>Verified member stats across 12 studio locations</span>
              <span className="font-bold text-neutral-700">Updated Daily</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
