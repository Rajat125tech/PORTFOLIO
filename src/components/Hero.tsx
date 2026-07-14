"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-border/5 rounded-full absolute"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border border-border/10 rounded-full absolute border-dashed"
        />
        <div className="w-[400px] h-[400px] bg-indigo-500/20 rounded-full absolute blur-[120px] mix-blend-screen animate-blob" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Side: Text Content */}
          <div className="flex-grow text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-xl md:text-2xl font-mono text-indigo-500 dark:text-indigo-400 mb-2 font-bold tracking-widest">
                RAJAT SRIVASTAVA
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 glow-text leading-[1.1] text-foreground">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">Intelligent</span>
                <br />
                Systems for the Future
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              AI/ML Engineer and Full-Stack Developer specializing in scalable architectures, high-performance inference, and production-grade systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-xl border border-border glass text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-bold"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right Side: Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Animated Ring around photo */}
            <div className="absolute inset-0 -m-4 rounded-full border border-indigo-500/30 animate-spin-slow opacity-50" />
            <div className="absolute inset-0 -m-8 rounded-full border border-indigo-500/10 animate-spin-slow-reverse opacity-30" />
            
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-3xl overflow-hidden border-2 border-border glass group">
               {/* Placeholder for your photograph */}
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:opacity-50 transition-opacity" />
               <Image
                src="/image.png"
                alt="Rajat Srivastava"
                fill
                className="object-cover transition-all duration-700"
                priority
               />               
               {/* Decorative border glow */}
               <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_60px_rgba(99,102,241,0.3)] transition-all" />
               </div>
               </motion.div>
        </div>

        {/* Bottom tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground opacity-50 flex-wrap"
        >
          {["Python", "TypeScript", "Next.js", "PyTorch", "AWS", "Docker"].map((tech) => (
            <span key={tech} className="font-mono text-xs font-bold tracking-widest uppercase">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
