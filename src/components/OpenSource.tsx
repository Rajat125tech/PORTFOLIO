"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Zap } from "lucide-react";

export default function OpenSource() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 border border-indigo-500/20 relative overflow-hidden group"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <GitPullRequest className="w-10 h-10 md:w-16 md:h-16 text-indigo-400" />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3 h-3" /> Open Source Contribution
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
                Database Kernel Optimization
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                Optimized query execution in <strong>ZerithDB</strong> by implementing cursor-based pagination and early-termination scanning. Significantly reduced memory overhead while handling large datasets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-3xl font-bold text-foreground mb-1">~365x</div>
                    <div className="text-sm text-muted-foreground">Latency Improvement</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-3xl font-bold text-foreground mb-1">10k+</div>
                    <div className="text-sm text-muted-foreground">Record Benchmarks</div>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/Rajat125tech/ZerithDB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
