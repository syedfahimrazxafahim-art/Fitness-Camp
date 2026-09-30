import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface TestimonialsProps {
  onViewAllReviews: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onViewAllReviews }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Visible testimonials in viewport (display 3 on desktop)
  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 2) % TESTIMONIALS.length]
  ];

  return (
    <section id="trainers" className="py-20 lg:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-heading">
              WHAT OUR MEMBERS SAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-heading tracking-tight">
              Real People. Real Results.
            </h2>
          </div>

          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-800 hover:text-black group cursor-pointer"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFBF6] rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-6 italic font-normal">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Member Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/70">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-neutral-900 leading-snug">
                    {item.name}
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Bottom Right Controls */}
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={prevTestimonial}
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-sm active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-sm active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
