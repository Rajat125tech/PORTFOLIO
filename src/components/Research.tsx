"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Eye, Activity, Award, Network } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Research() {
  return (
    <section id="research" className="py-14 relative bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Scientific Investigation
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
            IIT Jodhpur Research (Fetal Ultrasound Segmentation)
          </h1>
        </div>

        {/* High-density grid mapping the 6 required structure keys */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. PROBLEM */}
          <SpotlightCard glowColor="rgba(239, 68, 68, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 min-h-[160px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-red-500 dark:text-red-400">
              <Eye className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Problem</h3>
            </div>
            <p className="text-muted-foreground text-xs font-sans font-light leading-relaxed">
              2D medical ultrasound sweeps suffer from extreme acoustic shadows, speckle noise, and low boundary contrast, making manual clinical boundary trace slow and inconsistent.
            </p>
          </SpotlightCard>

          {/* 2. DATASET */}
          <SpotlightCard glowColor="rgba(59, 130, 246, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 min-h-[160px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400">
              <Database className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Dataset</h3>
            </div>
            <p className="text-muted-foreground text-xs font-sans font-light leading-relaxed">
              Evaluated on clinical fetal ultrasound sweep datasets (such as HC18) containing 2D cross-sectional scans annotated with structural metrics.
            </p>
          </SpotlightCard>

          {/* 3. METHODOLOGY */}
          <SpotlightCard glowColor="rgba(168, 85, 247, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 min-h-[160px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
              <Cpu className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Methodology</h3>
            </div>
            <p className="text-muted-foreground text-xs font-sans font-light leading-relaxed">
              Leveraged Multi-Grid networks (MG-Net) for spatial decomposition, coupled with linear state-space models (Vision Mamba) to capture global dependencies efficiently.
            </p>
          </SpotlightCard>

          {/* 4. ARCHITECTURE (Diagram) */}
          <SpotlightCard glowColor="rgba(236, 72, 153, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 lg:col-span-2 min-h-[160px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-pink-500 dark:text-pink-400">
              <Network className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Architecture Pipeline</h3>
            </div>
            <div className="relative w-full h-[64px] bg-muted/60 border border-border rounded-lg flex items-center justify-around px-2 text-[9px] font-mono text-muted-foreground overflow-hidden">
              <div className="text-center">
                <span className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground block">Input Frame</span>
              </div>
              <div className="w-6 border-t border-dashed border-border" />
              <div className="text-center">
                <span className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground block">MG-Net Spatial</span>
              </div>
              <div className="w-6 border-t border-dashed border-border" />
              <div className="text-center">
                <span className="px-1.5 py-0.5 bg-card border border-border rounded text-foreground block">Mamba Core</span>
              </div>
              <div className="w-6 border-t border-dashed border-border" />
              <div className="text-center">
                <span className="px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/30 rounded text-indigo-600 dark:text-indigo-300 block">Boundary Map</span>
              </div>
            </div>
          </SpotlightCard>

          {/* 5. RESULTS */}
          <SpotlightCard glowColor="rgba(16, 185, 129, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 min-h-[160px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400">
              <Award className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Results</h3>
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <span className="text-2xl font-bold font-mono text-foreground leading-none">94.2%</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1">Experimental Dice score</span>
              <p className="text-[10px] text-muted-foreground font-sans font-light mt-1.5 leading-relaxed">
                Strong boundary traces on target testing sweeps.
              </p>
            </div>
          </SpotlightCard>

          {/* 6. FUTURE WORK */}
          <SpotlightCard glowColor="rgba(245, 158, 11, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-3 lg:col-span-3 min-h-[110px]" enableTilt={false}>
            <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400">
              <Activity className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">Future Work</h3>
            </div>
            <p className="text-muted-foreground text-xs font-sans font-light leading-relaxed">
              Plan to optimize model inference footprint through INT8 model weight quantization to enable deployment on resource-constrained portable diagnostic and point-of-care ultrasound devices.
            </p>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
