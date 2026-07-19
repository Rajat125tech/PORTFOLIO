"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  architecture: string[];
  github: string;
  demo: string;
  metric: { label: string; value: string };
  previewNode?: React.ReactNode;
}

const featuredProjects: ProjectItem[] = [
  {
    id: "mg-net",
    title: "MG-Net Ultrasound Adaptation",
    category: "Deep Learning / Medical Imaging",
    description: "Domain adaptation model processing fetal ultrasound scans to resolve anatomical boundaries under low-contrast noise.",
    problem: "2D fetal ultrasound sweep scans suffer from severe acoustic shadows and speckle noise, making boundaries of fetal organs highly ambiguous for standard CNN structures.",
    solution: "Adapted Multi-Grid networks (MG-Net) integrated with linear state-space models (Vision Mamba) to capture multi-scale spatial details, achieving high pixel-level accuracy.",
    tech: ["Python", "PyTorch", "MG-Net", "Vision Mamba", "Speckle Filters"],
    architecture: [
      "2D Ultrasound sweep scan frame ingestion",
      "Speckle noise filtering & Multi-Grid decomposition",
      "Mamba state-space sequence modeling blocks",
      "Boundary segmentation mask calculation (94.2% Dice score)"
    ],
    github: "https://github.com/Rajat125tech/MG-Net-Ultrasound-Adaptation",
    demo: "#",
    metric: { label: "Dice Coefficient", value: "94.2%" }
  },
  {
    id: "semantic-search",
    title: "Semantic Search Engine",
    category: "AI / Similarity Engines",
    description: "High-performance vector search engine using sentence-level transformer embeddings and FAISS index matching.",
    problem: "Standard linear scans of high-dimensional document vectors degrade lookup latency significantly as dataset volume grows.",
    solution: "Engineered a vector search query engine leveraging SentenceTransformers, optimized with a cluster-aware Gaussian Mixture Model (GMM) semantic caching layer to reduce lookup complexity from O(N) to O(K).",
    tech: ["SentenceTransformers", "FAISS", "Docker", "Python", "GMM"],
    architecture: [
      "Raw text document stream ingestion",
      "High-dimensional vector embedding generation (SentenceTransformers)",
      "Gaussian Mixture Model fuzzy-clustering cache lookups",
      "FAISS index matching for similarity calculations (sub-100ms)"
    ],
    github: "https://github.com/Rajat125tech/Semantic-Search-fuzzy-clustering",
    demo: "#",
    metric: { label: "Search Latency", value: "<100ms" }
  },
  {
    id: "resume-screening",
    title: "Resume Screening App",
    category: "LLM / Text Analytics",
    description: "Automated candidate qualification matching engine parsing PDFs against software engineering job descriptions.",
    problem: "Recruiters spend hours manually reading profiles that do not align with target capabilities or requirements.",
    solution: "Built a document parsing and qualification matcher that extracts candidate credentials from PDFs and computes semantic alignment scores.",
    tech: ["TypeScript", "Next.js", "PDF.js", "LLM API"],
    architecture: [
      "Resume PDF document upload to system",
      "Text extraction & block parsing via PDF.js",
      "Key semantic capabilities extraction using LLMs",
      "Relevance alignment matching and score calculations"
    ],
    github: "https://github.com/Rajat125tech/resume-screening-app",
    demo: "#",
    metric: { label: "Evaluation Time", value: "<5 seconds" }
  },
  {
    id: "vastuzone",
    title: "VastuZone",
    category: "Full-Stack AI Application",
    description: "Generative AI consultation platform automating room-wise floor-plan plotting and interior geometry analysis.",
    problem: "Analyzing floor-plans for structural guidelines is a slow, manual process requiring geometric alignment and calculation.",
    solution: "Built a floor-plan parsing and layout generator reducing user input requirements by 80%. Implemented a secure backend with Zod validation and Firebase-JWT auth.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Firebase JWT", "Zod"],
    architecture: [
      "SVG / PNG layout upload & geometric coordinate normalizer",
      "Node.js & Express REST controller API with Zod schema verification",
      "Real-time event channel routing via Socket.IO",
      "LLM query processing and MongoDB query persistence"
    ],
    github: "https://github.com/Rajat125tech/VastuZone",
    demo: "https://vastuzone-frontend.onrender.com/",
    metric: { label: "Manual Input Saved", value: "80%" }
  },
  {
    id: "fare-prediction",
    title: "Fare Prediction Engine",
    category: "ML Inference Pipeline",
    description: "Real-time regression model serving endpoint predicting multi-platform transit prices under heavy peak load.",
    problem: "Real-time model inferences suffer from CPU bottlenecks and rate spikes under high concurrent user calls.",
    solution: "Deployed a scikit-learn gradient boosting pricing service with rate-limiting and query-response caching, saving 35% of inference compute cycles.",
    tech: ["FastAPI", "scikit-learn", "NumPy", "HuggingFace", "Docker", "Render"],
    architecture: [
      "FastAPI rate-limited HTTP endpoint",
      "Feature engineering pipeline integrating traffic & surge data streams",
      "Gradient Boosting model regressor (Scikit-Learn)",
      "Query response cache & Render distributed load balancer"
    ],
    github: "https://github.com/Rajat125tech/dynamic-fare-backend",
    demo: "https://dynamic-fare.vercel.app/",
    metric: { label: "Compute Saved", value: "35%" }
  },
  {
    id: "zerithdb",
    title: "ZerithDB",
    category: "Systems / Database Optimization",
    description: "Database kernel refactoring introducing index cursor lookups to optimize paginated scanning.",
    problem: "Standard database query pagination scans table indexes linearly, causing high memory overhead and execution latencies.",
    solution: "Optimized database query execution kernel by refactoring linear scanning pagination schemes into B-Tree seek operations, achieving a ~365x speedup.",
    tech: ["TypeScript", "Rust", "SQL", "B-Trees"],
    architecture: [
      "Paginated SQL request parsing",
      "Cursor parameter decoding",
      "B-Tree index seek operations (bypassing linear scans)",
      "Early-termination query scanning & low-allocation output"
    ],
    github: "https://github.com/Rajat125tech/ZerithDB",
    demo: "#",
    metric: { label: "Query Latency", value: "0.5ms (365x)" }
  }
];

const additionalProjects = [
  {
    title: "AI Task Infrastructure",
    tech: ["Python", "Celery", "Redis", "Docker"],
    description: "Asynchronous backend scheduler and queue orchestration running multi-agent execution loops with worker persistence.",
    github: "https://github.com/Rajat125tech/ai-task-infra"
  },
  {
    title: "AI Task App",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    description: "Real-time task monitoring dashboard enabling users to trigger agent worker workflows and inspect loop outputs.",
    github: "https://github.com/Rajat125tech/ai-task-app"
  },
  {
    title: "Machine Vision Project",
    tech: ["Python", "OpenCV", "PyTorch"],
    description: "Object classification and boundary detection pipelines tracking target objects on video camera feeds.",
    github: "https://github.com/Rajat125tech/Machine-Vision-project"
  },
  {
    title: "VidTube Backend",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    description: "YouTube-inspired video platform backend hosting user authentication, video transcoding hooks, and tweeting options.",
    github: "https://github.com/Rajat125tech/VidTube"
  },
  {
    title: "CPU Scheduler Simulator",
    tech: ["C++", "STL"],
    description: "Thread queue simulator modeling First-Come-First-Serve (FCFS), SJF, and Round Robin scheduler structures.",
    github: "https://github.com/Rajat125tech"
  },
  {
    title: "Compiler Project",
    tech: ["JavaScript", "HTML5"],
    description: "Lexical analysis compiler program converting arithmetic strings into structured AST trees and code runs.",
    github: "https://github.com/Rajat125tech/Compiler-Project"
  },
  {
    title: "Notes Task",
    tech: ["Python", "Django", "PostgreSQL"],
    description: "Task planner and note repository using relational database constraints for workspace organization.",
    github: "https://github.com/Rajat125tech/Notes_task"
  },
  {
    title: "Currency Converter",
    tech: ["JavaScript", "CSS3"],
    description: "Sleek frontend utility fetching active currency conversions and rendering instant result ratios.",
    github: "https://github.com/Rajat125tech/CurrencyConverter"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 relative bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Production Portfolio
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
            Featured Systems &amp; Projects
          </h1>
        </div>

        {/* Stacked Showcase Cards Layout */}
        <div className="flex flex-col gap-8">
          {featuredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <SpotlightCard glowColor="rgba(129, 140, 248, 0.03)" className="border-border bg-card/60 p-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left Column: Details & Meta */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          {p.category}
                        </span>
                        <div className="px-2.5 py-0.5 bg-muted border border-border text-[10px] font-mono text-emerald-600 dark:text-emerald-400 rounded">
                          {p.metric.label}: {p.metric.value}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground tracking-tight">{p.title}</h3>
                      
                      <div className="space-y-2 text-xs text-muted-foreground font-sans font-light leading-relaxed">
                        <p>
                          <strong className="text-foreground font-medium">Problem:</strong> {p.problem}
                        </p>
                        <p>
                          <strong className="text-foreground font-medium">Solution:</strong> {p.solution}
                        </p>
                      </div>

                      {/* Tech stack */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-muted-foreground uppercase block">Engine Stack</span>
                        <div className="flex flex-wrap gap-1">
                          {p.tech.map((t) => (
                            <span key={t} className="px-1.5 py-0.5 rounded bg-muted border border-border text-[9px] font-mono text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 border-t border-border pt-4">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-muted/60 hover:bg-accent text-foreground font-mono text-[10px] transition-all"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        GitHub Code
                      </a>
                      {p.demo !== "#" && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 font-mono text-[10px] font-semibold transition-all"
                        >
                          Launch Demo
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architecture & Interface Preview */}
                  <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                    <div className="rounded-xl border border-border bg-muted/30 p-4.5 flex-grow flex flex-col justify-between gap-4">
                      <div>
                        <h4 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">System Architecture Sequence</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {p.architecture.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-2 py-1.5 bg-card border border-border rounded-lg text-[9px] font-mono">
                              <span className="w-4 h-4 rounded-full bg-muted border border-border text-[8px] text-muted-foreground flex items-center justify-center font-bold">
                                0{idx + 1}
                              </span>
                              <span className="text-muted-foreground truncate">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Code/Interface Mock Preview */}
                      <div className="relative w-full h-[85px] bg-slate-950 dark:bg-black/60 border border-border rounded-lg p-2.5 font-mono text-[9px] text-zinc-400 overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 mb-1.5 text-zinc-400 text-[8px]">
                          <span>system_kernel_trace.log</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="flex-grow overflow-hidden text-zinc-400 space-y-1">
                          <div><span className="text-indigo-400">INFO</span> [system] Initializing {p.title} modules...</div>
                          <div><span className="text-emerald-400">OK</span> [kernel] Ingestion components configured successfully.</div>
                          <div><span className="text-zinc-200">$ curl -X POST /api/v1/infer -d &apos;{"{"}&quot;model&quot;: &quot;{p.id}&quot;{"}"}&apos;</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* ADDITIONAL ENGINEERING REPOSITORIES SECTION */}
        <div className="mt-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Additional Engineering Repositories
            </h2>
            <p className="text-muted-foreground mt-1 font-sans font-light text-xs">
              Functional codebases, libraries, and utilities from my active GitHub workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalProjects.map((p) => (
              <SpotlightCard
                key={p.title}
                glowColor="rgba(255,255,255,0.01)"
                className="border-border bg-card/60 p-4 flex flex-col justify-between min-h-[140px]"
                enableTilt={false}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs font-bold text-foreground tracking-tight">{p.title}</h4>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  
                  <p className="text-[11px] text-muted-foreground font-sans font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-3 border-t border-border pt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-1 py-0.5 rounded bg-muted text-[8px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
