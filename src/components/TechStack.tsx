"use client";

import { Cpu, Server, Database, Cloud, Layout, Settings, Code } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const categories = [
  {
    title: "Languages",
    icon: Code,
    color: "text-blue-400",
    skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    color: "text-emerald-400",
    skills: ["Scikit-learn", "NumPy", "Pandas", "Transformers", "Model Evaluation", "Gradient Boosting"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-purple-400",
    skills: ["FastAPI", "Django REST Framework", "Node.js", "Express.js"]
  },
  {
    title: "Database",
    icon: Database,
    color: "text-yellow-400",
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    skills: ["AWS", "Render", "Vercel", "Docker", "Docker Compose", "Git"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-pink-400",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-14 relative bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Capabilities
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
            Technical Stack
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <SpotlightCard
                key={cat.title}
                glowColor="rgba(255,255,255,0.01)"
                className="border-zinc-900 bg-zinc-950/20 p-5 flex flex-col gap-4"
                enableTilt={false}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded bg-zinc-900 border border-zinc-800 ${cat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white tracking-tight">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-900/60 border border-zinc-850 rounded text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
