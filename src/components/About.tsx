"use client";

import { Award, Code2, Brain, Users, Compass, Activity } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-14 relative bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Story Column */}
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Bridging the gap between <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                Research &amp; Production.
              </span>
            </h2>
            <div className="space-y-3.5 text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
              <p>
                I am a B.Tech Computer Science (AI &amp; ML) student at Vellore Institute of Technology (VIT) Vellore, where I hold the department&apos;s <strong>Rank 1</strong> status with a <strong>9.74 CGPA</strong>.
              </p>
              <p>
                My focus lies at the intersection of algorithmic efficiency and machine learning systems. I design and optimize performance-critical software—evident in my contributions to open-source database kernels like ZerithDB, where I refactored pagination layers to achieve a 365x query speedup.
              </p>
              <p>
                As a Program Representative for CSE-AIML and Design Team Leader for the Cubing Club, I combine systems development competence with verified student leadership.
              </p>
            </div>
          </div>

          {/* Key Parameters & Areas of Interest Column */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {/* 2x2 Grid of stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                {
                  icon: Award,
                  value: "Rank 1",
                  label: "CSE-AIML",
                  subtext: "VIT Vellore, 250+ cohort"
                },
                {
                  icon: Code2,
                  value: "350+",
                  label: "DSA Solved",
                  subtext: "Across LeetCode & platforms"
                },
                {
                  icon: Brain,
                  value: "9.74",
                  label: "CGPA",
                  subtext: "Top academic tier"
                },
                {
                  icon: Users,
                  value: "Leader",
                  label: "Program Rep",
                  subtext: "Elected student leadership"
                }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 flex flex-col justify-between min-h-[110px]"
                >
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="mt-2.5">
                    <span className="text-base font-bold font-mono text-white block">{stat.value}</span>
                    <span className="text-[10px] font-mono text-indigo-400 block mt-0.5">{stat.label}</span>
                    <span className="text-[9px] text-zinc-500 block mt-0.5 font-sans leading-tight">{stat.subtext}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal cards for Currently Working On & Research Focus */}
            <div className="grid grid-cols-1 gap-3 w-full">
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">Currently Working On</span>
                  <p className="text-[11px] text-zinc-300 font-sans font-light mt-1 leading-relaxed">
                    Deep Learning Research Internship @ IIT Jodhpur, developing ML models for fetal ultrasound segmentation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold block uppercase tracking-wider">Research Focus &amp; Interests</span>
                  <p className="text-[11px] text-zinc-300 font-sans font-light mt-1 leading-relaxed">
                    State-space models (Vision Mamba), high-performance inference optimization, and database kernel systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
