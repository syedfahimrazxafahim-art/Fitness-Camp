export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  caloriesBurn: string;
  trainers: string[];
  schedule: { day: string; time: string; trainer: string }[];
  benefits: string[];
  iconType: 'dumbbell' | 'yoga' | 'flame' | 'leaf';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatar: string;
  transformation?: string;
  joinedYear: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: 'Nutrition' | 'Workouts' | 'Wellness';
  image: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconType: 'users' | 'trophy' | 'calendar' | 'flame';
}
