"use client";

import { Trophy, Star, Target, Shield, BookOpen } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface Achievement {
  title: string;
  metric: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const realAchievements: Achievement[] = [
  {
    title: "Rank 1 AIML",
    metric: "#1 Department Rank",
    description: "Ranked 1st in the Artificial Intelligence & Machine Learning department among a cohort of 250+ students at VIT Vellore.",
    icon: Trophy,
    color: "text-yellow-500"
  },
  {
    title: "Highest CGPA",
    metric: "9.74 / 10.0",
    description: "Maintained outstanding academic standing throughout B.Tech coursework, securing top merit honors.",
    icon: Star,
    color: "text-emerald-500"
  },
  {
    title: "350+ LeetCode DSA",
    metric: "350+ Problems",
    description: "Solved 350+ data structures and algorithms challenges across LeetCode and competitive programming platforms.",
    icon: Target,
    color: "text-blue-500"
  },
  {
    title: "VIT Merit Scholarship",
    metric: "Rank 1st Scholarship",
    description: "Awarded top academic merit scholarships by the Vellore Institute of Technology for branch-wide performance.",
    icon: Shield,
    color: "text-red-500"
  },
  {
    title: "Research Internship Selection",
    metric: "IIT Jodhpur Selection",
    description: "Selected for deep learning research intern position in Medical Imaging Segmentation at IIT Jodhpur.",
    icon: BookOpen,
    color: "text-indigo-400"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 relative bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Validated Milestones
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
            Academic &amp; Coding Achievements
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {realAchievements.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={item.title}
                glowColor="rgba(129, 140, 248, 0.03)"
                className="border-border bg-card/60 p-4.5 sm:p-5 flex flex-col justify-between min-h-[145px]"
                enableTilt={false}
              >
                <div className="flex justify-between items-start">
                  <div className={`p-1.5 rounded bg-muted border border-border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Verified</span>
                </div>

                <div className="mt-4">
                  <span className="text-lg font-bold font-mono text-foreground block">{item.metric}</span>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5 block">{item.title}</span>
                  <p className="text-muted-foreground text-xs mt-1.5 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
