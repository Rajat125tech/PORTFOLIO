"use client";

import { motion } from "framer-motion";
import { Award, Brain, Code2, Server } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "Rank 1",
    label: "AIML Department",
    subtext: "VIT Vellore",
  },
  {
    icon: Code2,
    value: "350+",
    label: "DSA Problems",
    subtext: "Strong Foundations",
  },
  {
    icon: Brain,
    value: "9.68",
    label: "CGPA",
    subtext: "Academic Excellence",
  },
  {
    icon: Server,
    value: "10+",
    label: "Production Projects",
    subtext: "Full Stack & AI",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
              Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Production Systems</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I am an AI/ML Engineer and Full-Stack Developer at VIT Vellore (<strong>Rank 1</strong>, 9.68 CGPA), focused on bridging the gap between research-grade AI and production-grade software.
              </p>
              <p>
                My work is defined by five key engineering dimensions:
              </p>
              <div className="grid grid-cols-1 gap-4 mt-8">
                {[
                  {
                    id: "01",
                    title: "Systems Architecture",
                    description: "Designing low-latency query engines and scalable database kernels (0.5ms latencies)."
                  },
                  {
                    id: "02",
                    title: "Inference Engineering",
                    description: "Optimizing ML model hosting via response caching and compute reduction (35% efficiency gains)."
                  },
                  {
                    id: "03",
                    title: "Infrastructural Security",
                    description: "Implementing IP-scoped rate limiting, RBAC, and Zod-validated schema enforcement."
                  },
                  {
                    id: "04",
                    title: "Distributed Systems",
                    description: "Building real-time infrastructures using Socket.IO, Docker orchestration, and REST protocols."
                  },
                  {
                    id: "05",
                    title: "Algorithmic Optimality",
                    description: "Reducing complexity from O(N) to O(K) through cluster-aware semantic caching."
                  }
                ].map((item) => (
                  <div key={item.id} className="group p-4 rounded-xl border border-border/50 bg-accent/5 hover:bg-accent/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex gap-4">
                      <span className="text-xs font-mono text-purple-400 font-bold mt-1">{item.id}</span>
                      <div>
                        <h4 className="font-bold text-foreground mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border border-border hover:border-foreground/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground/70 mt-1">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
