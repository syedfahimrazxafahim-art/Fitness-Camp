import React, { useState } from 'react';
import { X, Clock, Flame, Shield, CheckCircle2, Calendar, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import { Program } from '../types';
import { PROGRAMS } from '../data/mockData';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTrial: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program: initialProgram,
  isOpen,
  onClose,
  onBookTrial
}) => {
  const [activeProgram, setActiveProgram] = useState<Program>(initialProgram || PROGRAMS[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [booked, setBooked] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialProgram) {
      setActiveProgram(initialProgram);
      setBooked(false);
      setSelectedSlot('');
    }
  }, [initialProgram]);

  if (!isOpen || !activeProgram) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      onBookTrial(activeProgram.title);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#ffffff] text-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8">
        
        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 w-full bg-neutral-900 overflow-hidden">
          <img
            src={activeProgram.image}
            alt={activeProgram.title}
            className="w-full h-full object-cover filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-bold tracking-widest text-[#CEF72E] uppercase font-mono">
              {activeProgram.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading mt-1">
              {activeProgram.title}
            </h2>
          </div>
        </div>

        {/* Tab switchers between programs */}
        <div className="flex border-b border-neutral-200 bg-neutral-50 overflow-x-auto px-4 py-2 gap-2">
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProgram(p);
                setBooked(false);
                setSelectedSlot('');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeProgram.id === p.id
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metric Badges */}
          <div className="grid grid-cols-3 gap-3 bg-[#FAFBF6] p-4 rounded-2xl border border-neutral-200">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-4 h-4 text-neutral-500 mb-1" />
              <span className="text-[11px] text-neutral-500 font-medium">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-neutral-900">{activeProgram.duration}</span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-neutral-200">
              <Flame className="w-4 h-4 text-amber-500 mb-1" />
              <span className="text-[11px] text-neutral-500 font-medium">Burn Range</span>
              <span className="text-xs sm:text-sm font-bold text-neutral-900">{activeProgram.caloriesBurn}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-4 h-4 text-[#CEF72E] mb-1" />
              <span className="text-[11px] text-neutral-500 font-medium">Intensity</span>
              <span className="text-xs sm:text-sm font-bold text-neutral-900">{activeProgram.level}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2 font-heading">
              Overview & Methodology
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {activeProgram.longDescription}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3 font-heading">
              What&apos;s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeProgram.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2c3803] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule & Coaching */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3 font-heading flex items-center justify-between">
              <span>Weekly Class Schedule</span>
              <span className="text-xs text-neutral-500 font-normal">Select a slot to reserve</span>
            </h3>
            <div className="space-y-2">
              {activeProgram.schedule.map((slot, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedSlot(`${slot.day} - ${slot.time}`)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedSlot === `${slot.day} - ${slot.time}`
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-400 text-neutral-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-4 h-4 ${selectedSlot === `${slot.day} - ${slot.time}` ? 'text-[#CEF72E]' : 'text-neutral-500'}`} />
                    <div>
                      <div className="text-xs font-bold">{slot.day}</div>
                      <div className="text-[11px] opacity-80">{slot.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-medium opacity-90">Coach: {slot.trainer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Action */}
          {booked ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center text-emerald-800 font-semibold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Trial booked for {activeProgram.title}! Opening VIP Pass...</span>
            </div>
          ) : (
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200">
              <div className="text-xs text-neutral-500">
                ⚡ Free for first-time visitors · Includes equipment & locker
              </div>
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto btn-liquid-metal text-black font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl cursor-pointer shadow-lg shadow-[#CEF72E]/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Trial Session</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
