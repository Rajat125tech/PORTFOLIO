"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Target, Users } from "lucide-react";

const achievements = [
  {
    title: "Rank 1 in AIML",
    description: "Highest academic standing among 250+ students in the Artificial Intelligence & Machine Learning department at VIT Vellore.",
    icon: Trophy,
    stat: "9.68 CGPA"
  },
  {
    title: "350+ DSA Solved",
    description: "Expert-level problem solving with 350+ challenges cleared on LeetCode and competitive platforms.",
    icon: Target,
    stat: "Gold Level"
  },
  {
    title: "Program Representative",
    description: "Elected to lead and coordinate strategic initiatives for a cohort of 250+ students.",
    icon: Users,
    stat: "250+ Students"
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Milestones</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-border text-center group hover:border-foreground/10 transition-all flex flex-col"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform border border-yellow-500/20">
                <item.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="mb-2 inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mx-auto">
                {item.stat}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 mt-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
