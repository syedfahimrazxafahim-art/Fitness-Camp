import React from 'react';
import { ArrowRight, Dumbbell, Flame, Leaf, Sparkles, Activity } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';

interface ProgramsProps {
  onSelectProgram: (program: Program) => void;
  onViewAllPrograms: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  onSelectProgram,
  onViewAllPrograms
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'dumbbell':
        return <Dumbbell className="w-4 h-4 text-[#2c3803]" />;
      case 'yoga':
        return <Sparkles className="w-4 h-4 text-[#2c3803]" />;
      case 'flame':
        return <Flame className="w-4 h-4 text-[#2c3803]" />;
      case 'leaf':
        return <Leaf className="w-4 h-4 text-[#2c3803]" />;
      default:
        return <Activity className="w-4 h-4 text-[#2c3803]" />;
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#ffffff] text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-heading">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight">
              Find The Right Program For You
            </h2>
          </div>

          <button
            onClick={onViewAllPrograms}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-800 hover:text-black group cursor-pointer"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onSelectProgram(program)}
              className="group bg-[#FAFBF6] rounded-2xl p-3 sm:p-4 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Icon Badge */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-neutral-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                
                {/* Overlaid Bottom-Left Lime Icon */}
                <div className="absolute -bottom-1 left-3 translate-y-1/2 w-9 h-9 rounded-full bg-[#E5F976] flex items-center justify-center shadow-md border-2 border-white group-hover:bg-[#CEF72E] group-hover:scale-110 transition-all">
                  {getIcon(program.iconType)}
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-2 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-black font-heading">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-bold text-neutral-800 group-hover:text-black">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
