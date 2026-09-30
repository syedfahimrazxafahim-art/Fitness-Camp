import { Program, Testimonial, BlogPost, ImpactStat } from '../types';

export const LOGO_IMAGE = 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803871/0710e708-8360-4ce6-b771-860a9eaae8f3.jpg';
export const HERO_IMAGE = 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803885/5132a8ec-6555-4bac-aa84-d0e3bf863780.png';
export const MOTIVATION_IMAGE = 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803871/barbell-bicep-curl.webp';

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Hypertrophy & Power',
    description: 'Build muscle, increase strength and improve performance.',
    longDescription: 'Our signature strength program incorporates progressive overload, periodized powerlifting compounds, hypertrophy accessories, and tailored biometric recovery tracking. Guided by Olympic-level trainers.',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803871/gdaqdfqte17vdsabdvabns_asdvasgfd.jpg',
    duration: '60 min',
    level: 'Intermediate',
    caloriesBurn: '450 - 600 kcal',
    trainers: ['Alex Vance (CSCS)', 'Elena Rostova (Olympic Coach)'],
    schedule: [
      { day: 'Mon / Wed / Fri', time: '07:00 AM & 06:00 PM', trainer: 'Alex Vance' },
      { day: 'Tue / Thu / Sat', time: '08:30 AM & 05:30 PM', trainer: 'Elena Rostova' }
    ],
    benefits: [
      'Targeted progressive overload protocols',
      'Full body biomechanical posture correction',
      'Free barbell, kettlebell, and plate-loaded zone access',
      'Monthly InBody body composition scan included'
    ],
    iconType: 'dumbbell'
  },
  {
    id: 'yoga-flexibility',
    title: 'Yoga & Flexibility',
    category: 'Mobility & Recovery',
    description: 'Improve flexibility, balance and mental well-being with expert-led yoga.',
    longDescription: 'Blend dynamic Vinyasa flow, Yin restorative stretches, and mindfulness breathwork. Perfect for unlocking tight hips, releasing spinal compression, improving posture, and speeding up muscular recovery.',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803871/qkue37teghdgdhwedgsagdahsgdhsagdagd7qte78q.jpg',
    duration: '50 min',
    level: 'All Levels',
    caloriesBurn: '250 - 350 kcal',
    trainers: ['Maya Patel (RYT-500)', 'Liam Chen (Mobility Specialist)'],
    schedule: [
      { day: 'Mon to Fri', time: '06:30 AM & 07:00 PM', trainer: 'Maya Patel' },
      { day: 'Saturday & Sunday', time: '09:00 AM & 04:00 PM', trainer: 'Liam Chen' }
    ],
    benefits: [
      'Enhanced joint range of motion & injury prevention',
      'Parasympathetic nervous system downregulation',
      'Infrared heated studio with clean ambient lighting',
      'Core stability and deep isometric activation'
    ],
    iconType: 'yoga'
  },
  {
    id: 'cardio-hiit',
    title: 'Cardio & HIIT',
    category: 'Endurance & Fat Loss',
    description: 'Burn calories, boost endurance and improve your cardiovascular health.',
    longDescription: 'High-octane interval training combining assault bikes, curved treadmills, battle ropes, and plyometrics with real-time heart rate zone telemetry to maximize EPOC afterburn.',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803872/bhbhghuuuuuuy787890009999.jpg',
    duration: '45 min',
    level: 'Advanced',
    caloriesBurn: '600 - 850 kcal',
    trainers: ['Marcus Thorne (CrossFit L3)', 'Chloe Dupont (Track & Field)'],
    schedule: [
      { day: 'Mon / Wed / Fri', time: '06:00 AM, 12:00 PM, 06:30 PM', trainer: 'Marcus Thorne' },
      { day: 'Tue / Thu', time: '07:30 AM & 05:30 PM', trainer: 'Chloe Dupont' }
    ],
    benefits: [
      'Real-time heart rate monitor integration on LED screens',
      'High calorie afterburn (EPOC effect up to 36 hours)',
      'Dynamic agility and aerobic threshold development',
      'Hydration bar and electrolyte replenishment'
    ],
    iconType: 'flame'
  },
  {
    id: 'nutrition-coaching',
    title: 'Nutrition Coaching',
    category: 'Diet & Lifestyle',
    description: 'Get personalized nutrition plans to fuel your body and goals.',
    longDescription: 'Evidence-based sports nutrition and holistic meal structuring. Work 1-on-1 with registered sports dietitians to calibrate your macronutrient ratios, gut health, micronutrients, and supplement stacks.',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803872/Screenshot_2026-09-30_142334.png',
    duration: 'Custom Consult',
    level: 'All Levels',
    caloriesBurn: 'Targeted Energy Balance',
    trainers: ['Dr. Julian Hayes (RD, PhD)', 'Sarah Lin (Sports Dietitian)'],
    schedule: [
      { day: 'Monday to Saturday', time: 'By Appointment (Virtual & In-Person)', trainer: 'Dr. Julian Hayes' }
    ],
    benefits: [
      'Tailored macro & micronutrient breakdown for your exact goals',
      'Grocery shopping guides and meal prep blueprints',
      'Weekly check-ins with body composition tracking',
      'Recipe database with 500+ high-protein gourmet meals'
    ],
    iconType: 'leaf'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  { id: '1', value: 10, suffix: 'K+', label: 'Members Joined', iconType: 'users' },
  { id: '2', value: 150, suffix: '+', label: 'Fitness Programs', iconType: 'trophy' },
  { id: '3', value: 98, suffix: '%', label: 'Member Satisfaction', iconType: 'calendar' },
  { id: '4', value: 500, suffix: 'K+', label: 'Workouts Completed', iconType: 'flame' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Member',
    rating: 5,
    content: 'Strive Fitness changed my life! The trainers are amazing and the environment keeps me motivated every day.',
    avatar: '/src/assets/images/avatar_sarah_1790726074577.jpg',
    transformation: '-18 lbs & +40% Strength',
    joinedYear: 'Member since 2022'
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    role: 'Member',
    rating: 5,
    content: 'The personalized plan and nutrition coaching helped me achieve results I never thought possible.',
    avatar: '/src/assets/images/avatar_michael_1790726090492.jpg',
    transformation: '+12 lbs Lean Muscle Mass',
    joinedYear: 'Member since 2023'
  },
  {
    id: 'emily-davis',
    name: 'Emily Davis',
    role: 'Member',
    rating: 5,
    content: 'Best gym experience ever! Clean facilities, great community and excellent support.',
    avatar: '/src/assets/images/avatar_emily_1790726106822.jpg',
    transformation: 'Marathon PR (3h 18m)',
    joinedYear: 'Member since 2021'
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Member',
    rating: 5,
    content: 'The HIIT cardio classes combined with strength coaching transformed my energy levels and endurance completely.',
    avatar: '/src/assets/images/avatar_michael_1790726090492.jpg',
    transformation: 'Lost 25 lbs & ran first 10K',
    joinedYear: 'Member since 2024'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'superfoods-fuel-workouts',
    title: '10 Superfoods to Fuel Your Workouts',
    date: 'May 12, 2024',
    category: 'Nutrition',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803871/forget_steroids_-_1200x630.jpg',
    readTime: '4 min read',
    excerpt: 'Discover the top nutrient-dense superfoods that deliver sustained energy, accelerate muscle repair, and enhance training output.',
    content: [
      'Proper nutrition is the cornerstone of athletic endurance and recovery. What you put into your body directly dictates how hard you can push during your next session and how quickly your muscle fibers bounce back.',
      '1. Wild Blueberries & Tart Cherries: Packed with anthocyanins and potent antioxidants that reduce exercise-induced muscle soreness (DOMS).',
      '2. Hass Avocado: Provides clean monounsaturated fats that stabilize energy hormones and support fat-soluble vitamin absorption (A, D, E, K).',
      '3. Organic Quinoa: A complete plant protein containing all 9 essential amino acids alongside complex slow-digesting carbohydrates.',
      '4. Wild Salmon & Omega-3s: Lowers cellular inflammation and boosts myofibrillar protein synthesis when paired with resistance training.',
      '5. Dark Leafy Greens (Spinach & Kale): Rich in dietary nitrates that enhance nitric oxide bioavailability, improving blood flow and muscle oxygenation.'
    ],
    author: {
      name: 'Dr. Julian Hayes',
      role: 'Lead Sports Nutritionist'
    }
  },
  {
    id: 'build-strength-effectively',
    title: 'How to Build Strength Effectively',
    date: 'May 08, 2024',
    category: 'Workouts',
    image: 'https://res.cloudinary.com/fzobzdco/image/upload/v1790803872/bbbhha_a145fisdhhegduwed.jpg',
    readTime: '6 min read',
    excerpt: 'Master progressive overload, optimal rep ranges, and rest periods to consistently add weight to your lifts without plateauing.',
    content: [
      'Strength is a learned neuromuscular skill. To build true raw power, your training regimen must be governed by systematic progressive overload rather than random exertion.',
      '1. Prioritize Multi-Joint Compound Movements: The squat, deadlift, bench press, overhead press, and pull-up recruit the highest number of motor units simultaneously.',
      '2. Follow The 3-5 Rep Power Law: For pure strength adaptation, keep your primary working sets between 3 to 6 reps at 80-87.5% of your 1-Rep Max with 2.5 to 4 minutes of rest between sets.',
      '3. Track Your RIR (Reps in Reserve): Avoid training to total muscular failure on every compound lift. Leaving 1-2 reps in reserve prevents central nervous system burnout while maintaining peak bar speed.',
      '4. Deload Every 4 to 6 Weeks: Strategic recovery weeks allow connective tendons and deep nervous tissue to remodel, setting you up for breakthrough PRs.'
    ],
    author: {
      name: 'Alex Vance',
      role: 'Head Strength Coach'
    }
  },
  {
    id: 'power-of-mindset-fitness',
    title: 'The Power of Mindset in Fitness',
    date: 'May 01, 2024',
    category: 'Wellness',
    image: '/src/assets/images/blog_mindset_1790726059905.jpg',
    readTime: '5 min read',
    excerpt: 'Explore the psychological habits and mental frameworks that turn temporary gym motivation into lifelong unbreakable discipline.',
    content: [
      'Physical transformation begins in the mind long before the weights ever leave the rack. Motivation is volatile, but systematic habit architecture and identity-based habits create lasting discipline.',
      '1. Identity-Based Fitness: Stop telling yourself "I am trying to get fit" and start operating with the identity "I am someone who takes care of my physical vehicle every single day."',
      '2. The 5-Minute Rule: On days when resistance is high, commit to just putting on your shoes and stepping through the gym doors for 5 minutes. 90% of the friction is simply starting.',
      '3. Embrace Friction as Growth: Understand that the burning sensation during the final 3 reps is the exact biological signal triggering your body to adapt and become more resilient.',
      '4. Restorative Mindfulness: Incorporate 5 minutes of box breathing after workouts to immediately shift from sympathetic fight-or-flight into parasympathetic anabolic recovery.'
    ],
    author: {
      name: 'Maya Patel',
      role: 'Mindfulness & Yoga Director'
    }
  }
];

export const FEATURES = [
  {
    id: 'modern-equipment',
    title: 'Modern Equipment',
    description: 'Train with state-of-the-art equipment in a premium environment.',
    icon: 'dumbbell'
  },
  {
    id: 'expert-trainers',
    title: 'Expert Trainers',
    description: 'Certified trainers to guide you every step of the way.',
    icon: 'user'
  },
  {
    id: 'personalized-plans',
    title: 'Personalized Plans',
    description: 'Customized workout & nutrition plans tailored just for you.',
    icon: 'clipboard'
  },
  {
    id: 'results-that-last',
    title: 'Results That Last',
    description: 'We focus on sustainable results and a healthier lifestyle.',
    icon: 'heart'
  }
];
