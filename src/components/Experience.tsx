"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, GitPullRequest } from "lucide-react";

const experiences = [
  {
    role: "Open Source Contributor",
    organization: "ZerithDB",
    link: "https://github.com/Rajat125tech/ZerithDB",
    period: "May 2026",
    description: "Optimized database kernel query execution. Implemented cursor-based pagination and early-termination scanning for high-throughput datasets.",
    highlights: [
      "~365x Latency Improvement (182ms → 0.5ms)",
      "Significant reduction in memory overhead",
      "Integrated early-termination query scanning",
      "Benchmark: 10k-record scalability test"
    ],
    type: "OS"
  },
  {
    role: "Design Team Leader",
    organization: "Cubing Club, VIT Vellore",
    link: "https://www.linkedin.com/company/the-cubing-club-vit-vellore/",
    period: "Mar 2024 – Present",
    description: "Orchestrated large-scale technical events for 100+ participants. Focused on optimizing execution workflows and scaling participation through targeted digital frameworks.",
    highlights: [
      "Led 10+ member cross-functional team",
      "30% Increase in User Participation",
      "Managed 5+ Large-scale technical events",
      "Workflow & Logistics Optimization"
    ],
    type: "Leadership"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experience</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12 border-l border-border group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-background group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-foreground leading-none">{exp.role}</h3>
                    {exp.type === "OS" && (
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                        Open Source
                      </span>
                    )}
                  </div>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-medium hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {exp.organization}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-3 py-1.5 rounded-lg w-fit border border-border">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {exp.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
