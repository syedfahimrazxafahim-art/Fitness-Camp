import React from 'react';
import { Dumbbell, UserCheck, ClipboardList, Heart } from 'lucide-react';
import { FEATURES } from '../data/mockData';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-5 h-5 text-[#2c3803]" />;
      case 'user':
        return <UserCheck className="w-5 h-5 text-[#2c3803]" />;
      case 'clipboard':
        return <ClipboardList className="w-5 h-5 text-[#2c3803]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#2c3803]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#2c3803]" />;
    }
  };

  return (
    <section id="about" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAFBF6] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-neutral-200/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200">
          {FEATURES.map((feat, idx) => (
            <div
              key={feat.id}
              className={`flex items-start gap-4 ${
                idx !== 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''
              } group transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              <div className="w-12 h-12 rounded-full bg-[#E5F976] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#CEF72E] transition-all duration-300 shadow-sm">
                {getIcon(feat.icon)}
              </div>
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-bold text-neutral-900 mb-1 group-hover:text-black transition-colors font-heading">
                  {feat.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
