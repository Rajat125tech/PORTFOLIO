"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Sparkles, BrainCircuit, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Semantic Search Engine",
    description: "High-performance vector search engine using transformer embeddings and FAISS. Optimized for extreme scalability through fuzzy-clustering caching.",
    tech: ["SentenceTransformers", "FAISS", "Docker", "Python", "GMM"],
    highlights: [
      "Sub-100ms similarity retrieval",
      "Cluster-aware semantic caching layer",
      "Complexity: O(N) → O(K) reduction",
      "Gaussian Mixture Model integration"
    ],
    icon: Database,
    github: "https://github.com/Rajat125tech/Semantic-Search-fuzzy-clustering",
    demo: "#",
    color: "from-blue-500/20 to-indigo-500/20",
    metric: { label: "Query Speedup", value: "Scalable O(K)" }
  },
  {
    title: "VastuZone",
    description: "Gen-AI powered Vastu platform. Engineered with production-grade security and a scalable micro-backend infrastructure.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
    highlights: [
      "Secure RBAC & Firebase-JWT Auth",
      "Zod-validated API infrastructure",
      "15% Lower Request Latency",
      "80% Input Time Reduction"
    ],
    icon: ShieldCheck,
    github: "https://github.com/Rajat125tech/VastuZone",
    demo: "https://vastuzone-frontend.onrender.com/",
    color: "from-purple-500/20 to-pink-500/20",
    metric: { label: "User Friction", value: "-80% Input" }
  },
  {
    title: "Fare Prediction Engine",
    description: "Real-time ML pricing engine. Architected for low-latency inference and high compute efficiency using gradient boosting.",
    tech: ["FastAPI", "scikit-learn", "HuggingFace", "NumPy"],
    highlights: [
      "IP-scoped Rate Limiting & Security",
      "35% Compute Reduction via Caching",
      "Sub-150ms Inference Latency",
      "Dynamic Feature Engineering"
    ],
    icon: Zap,
    github: "https://github.com/Rajat125tech/dynamic-fare-backend",
    demo: "https://dynamic-fare.vercel.app/",
    color: "from-green-500/20 to-emerald-500/20",
    metric: { label: "Compute Efficiency", value: "+35% Save" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Benchmarks</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            Surgical applications of AI and Full-Stack engineering where performance, security, and scalability are the primary constraints.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden border border-border hover:border-foreground/10 transition-all flex flex-col group"
            >
              <div className={`p-8 bg-gradient-to-br ${project.color} border-b border-border flex items-center justify-between`}>
                <project.icon className="w-10 h-10 text-foreground" />
                <div className="flex items-center gap-3 text-foreground">
                   <div className="text-right mr-2">
                      <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{project.metric.label}</div>
                      <div className="text-lg font-mono font-bold leading-tight">{project.metric.value}</div>
                   </div>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-accent hover:bg-accent/80 rounded-full transition-colors text-foreground border border-border">
                      <FaGithub className="w-4 h-4" />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-accent hover:bg-accent/80 rounded-full transition-colors text-foreground border border-border">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-[0.2em] mb-3">Technical Highlights</h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                        <BarChart3 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono font-bold text-muted-foreground bg-accent/50 px-2 py-1 rounded tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
