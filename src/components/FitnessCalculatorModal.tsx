import React, { useState } from 'react';
import { X, Calculator, Activity, ArrowRight, Zap, Target } from 'lucide-react';

interface FitnessCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (programId: string) => void;
}

export const FitnessCalculatorModal: React.FC<FitnessCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram
}) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [activityLevel, setActivityLevel] = useState<number>(1.55); // moderate
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'endurance'>('muscle_gain');

  if (!isOpen) return null;

  // Calculate BMI
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  // Calculate BMR (Mifflin-St Jeor)
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  // TDEE (Total Daily Energy Expenditure)
  const tdee = bmr * activityLevel;

  // Target Calories based on Goal
  let targetCalories = tdee;
  let targetProtein = weightKg * 2.0; // g
  let recommendedProgram = 'strength-training';
  let programName = 'Strength Training';

  if (goal === 'fat_loss') {
    targetCalories = tdee - 500;
    targetProtein = weightKg * 2.2;
    recommendedProgram = 'cardio-hiit';
    programName = 'Cardio & HIIT';
  } else if (goal === 'muscle_gain') {
    targetCalories = tdee + 350;
    targetProtein = weightKg * 2.0;
    recommendedProgram = 'strength-training';
    programName = 'Strength Training';
  } else {
    targetCalories = tdee;
    targetProtein = weightKg * 1.8;
    recommendedProgram = 'yoga-flexibility';
    programName = 'Yoga & Flexibility';
  }

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-amber-500' };
    if (val < 25) return { text: 'Optimal Normal', color: 'text-emerald-600' };
    if (val < 30) return { text: 'Overweight', color: 'text-amber-600' };
    return { text: 'High', color: 'text-rose-600' };
  };

  const bmiCat = getBmiCategory(bmi);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#ffffff] text-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8">
        
        {/* Header */}
        <div className="bg-[#0b0c10] p-6 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#CEF72E] flex items-center justify-center text-black font-black">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-wider uppercase font-heading">
                STRIVE FITNESS & NUTRITION CALCULATOR
              </h2>
              <p className="text-[11px] text-neutral-400">Calculate BMI, Maintenance Calories & Macro Targets</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Gender */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Gender</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    gender === 'male' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    gender === 'female' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                Age: <span className="font-mono text-neutral-900">{age} yrs</span>
              </label>
              <input
                type="range"
                min="16"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-[#CEF72E]"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                Weight: <span className="font-mono text-neutral-900">{weightKg} kg</span> ({Math.round(weightKg * 2.204)} lbs)
              </label>
              <input
                type="range"
                min="40"
                max="160"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#CEF72E]"
              />
            </div>

            {/* Height */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                Height: <span className="font-mono text-neutral-900">{heightCm} cm</span> ({Math.floor(heightCm / 30.48)}&apos;{Math.round((heightCm % 30.48) / 2.54)}&quot;)
              </label>
              <input
                type="range"
                min="140"
                max="215"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#CEF72E]"
              />
            </div>
          </div>

          {/* Goal selection */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase mb-2">Primary Goal</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setGoal('muscle_gain')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  goal === 'muscle_gain' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                }`}
              >
                <span>💪 Muscle & Strength</span>
              </button>
              <button
                type="button"
                onClick={() => setGoal('fat_loss')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  goal === 'fat_loss' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                }`}
              >
                <span>🔥 Fat Loss & HIIT</span>
              </button>
              <button
                type="button"
                onClick={() => setGoal('endurance')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  goal === 'endurance' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                }`}
              >
                <span>🧘 Mobility & Vitality</span>
              </button>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-[#FAFBF6] rounded-2xl p-5 border border-neutral-200 space-y-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-2">
                <div className="text-[11px] text-neutral-500 font-medium">BMI Score</div>
                <div className="text-xl font-black font-mono text-neutral-900">{bmi.toFixed(1)}</div>
                <div className={`text-[10px] font-bold ${bmiCat.color}`}>{bmiCat.text}</div>
              </div>
              <div className="p-2 border-x border-neutral-200">
                <div className="text-[11px] text-neutral-500 font-medium">Daily Target</div>
                <div className="text-xl font-black font-mono text-neutral-900">{Math.round(targetCalories)}</div>
                <div className="text-[10px] text-neutral-500">kcal / day</div>
              </div>
              <div className="p-2">
                <div className="text-[11px] text-neutral-500 font-medium">Protein Target</div>
                <div className="text-xl font-black font-mono text-neutral-900">{Math.round(targetProtein)}g</div>
                <div className="text-[10px] text-neutral-500">daily intake</div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-neutral-700">
                🎯 Best Match: <strong>{programName}</strong>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectProgram(recommendedProgram);
                }}
                className="btn-liquid-metal text-black font-extrabold text-xs px-4 py-2.5 rounded-xl cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore {programName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
