"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, GitFork, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface JobExperience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  type: string;
}

const experiences: JobExperience[] = [
  {
    role: "Deep Learning Research Intern",
    organization: "IIT Jodhpur (Indian Institute of Technology)",
    period: "May 2026 – Present",
    description: "Developing deep learning models for medical imaging segmentation (fetal ultrasound) using multi-grid decompositions (MG-Net) and linear state-space models (Vision Mamba).",
    highlights: [
      "Targeting edge runtime constraints to deploy models on portable clinical equipment",
      "Achieved an experimental Dice Coefficient of 94.2% on ultrasound boundaries",
      "Resolving acoustical shadow interference boundaries and speckle noise details"
    ],
    type: "Research"
  },
  {
    role: "Open Source Contributor",
    organization: "ZerithDB Project",
    period: "May 2026",
    description: "Optimized database query execution kernel by refactoring linear scanning pagination schemes into logarithmic B-Tree seek operations.",
    highlights: [
      "~365x Latency Improvement (182ms → 0.5ms) on query page indexes",
      "Implemented early-termination query scanning to drop compute cost",
      "Successfully reduced paginated memory allocations on 10k-record sweeps"
    ],
    type: "Open Source"
  },
  {
    role: "Design Team Leader",
    organization: "Cubing Club, VIT Vellore",
    period: "Mar 2024 – Present",
    description: "Managed logistics and cross-functional coordination for large-scale student events, optimizing execution workflows and event promotion frameworks.",
    highlights: [
      "Managed planning and execution of 5+ large-scale technical and creative events",
      "Led and directed a 10+ member cross-functional design team",
      "Increased event participation by 30% (80 to 105+ attendees)"
    ],
    type: "Leadership"
  },
  {
    role: "Program Representative",
    organization: "CSE-AIML, VIT Vellore",
    period: "Aug 2023 – Present",
    description: "Elected student representative managing coordination, curriculum alignments, and leadership initiatives for the B.Tech Computer Science (AI & ML) cohort.",
    highlights: [
      "Representing and aligning student requests for a cohort of 250+ undergraduates",
      "Facilitating academic coordination boards and coordinating student feedback loops"
    ],
    type: "Student Leadership"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 relative bg-black text-white">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Work Experience
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            Professional Timeline
          </h1>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-zinc-900" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline Dot Badge */}
                <div className="absolute left-3 md:left-5 top-1.5 w-6 h-6 rounded-full border border-zinc-850 bg-black -translate-x-1/2 flex items-center justify-center z-10">
                  <Briefcase className="w-3 h-3 text-zinc-500" />
                </div>

                <SpotlightCard glowColor="rgba(129, 140, 248, 0.03)" className="border-zinc-900 bg-zinc-950/40 p-4.5 sm:p-5">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                      <span className="text-[11px] text-indigo-400 font-mono block mt-0.5">
                        {exp.organization} &bull; {exp.type}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-400 rounded whitespace-nowrap self-start md:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs font-sans font-light leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-zinc-900/60 pt-3">
                    {exp.highlights.map((hl) => (
                      <div key={hl} className="flex items-start gap-1.5 text-[11px] text-zinc-400">
                        <ChevronRight className="w-3 h-3 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
