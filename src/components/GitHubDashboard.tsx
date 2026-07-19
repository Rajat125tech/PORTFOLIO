"use client";

import { useEffect, useState } from "react";
import { GitBranch, Code2, Activity } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / value), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(value / 30);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function GitHubDashboard() {
  const languages = [
    { name: "TypeScript", percentage: 38, color: "bg-blue-500" },
    { name: "Python", percentage: 32, color: "bg-yellow-500" },
    { name: "JavaScript", percentage: 20, color: "bg-amber-400" },
    { name: "C++", percentage: 8, color: "bg-red-500" },
    { name: "Other", percentage: 2, color: "bg-muted-foreground" }
  ];

  return (
    <section id="github" className="py-14 relative bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Systems Contributions
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
            GitHub Diagnostics &amp; Contributions
          </h1>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Card 1: Real-time Contribution Chart */}
          <div className="md:col-span-8">
            <SpotlightCard glowColor="rgba(59, 130, 246, 0.03)" className="h-full border-border bg-card/60 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground border-b border-border pb-2 mb-4">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-500" />
                  REAL-TIME CONTRIBUTION GRAPH
                </span>
                <span className="text-[10px]">Rajat125tech</span>
              </div>

              {/* Embed rshah ghchart displaying real public contributions */}
              <div className="w-full flex items-center justify-center py-4 bg-muted/40 rounded-lg border border-border overflow-hidden px-2">
                <img
                  src="https://ghchart.rshah.org/6366f1/Rajat125tech"
                  alt="Rajat Srivastava's GitHub Contribution Heatmap"
                  className="w-full h-auto filter saturate-[0.85] dark:invert-0 light:hue-rotate-180"
                  loading="lazy"
                />
              </div>

              <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground mt-2">
                <span>Data retrieved dynamically from github.com/Rajat125tech</span>
                <span>Real-Time Tracker</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Repository Count */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <SpotlightCard glowColor="rgba(59, 130, 246, 0.02)" className="h-full border-border bg-card/60 p-5 flex flex-col justify-between min-h-[160px]" enableTilt={false}>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground border-b border-border pb-2">
                <span>REPOSITORIES</span>
                <GitBranch className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              </div>
              
              <div className="my-auto py-4">
                <span className="text-4xl font-bold font-mono text-foreground block">
                  <CountUp value={15} />
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-1 block">Verified Public Repositories</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Language Allocation */}
          <div className="md:col-span-12">
            <SpotlightCard glowColor="rgba(16, 185, 129, 0.02)" className="border-border bg-card/60 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground border-b border-border pb-2">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  WORKSPACE LANGUAGE ALLOCATION
                </span>
                <span>Top Languages</span>
              </div>

              {/* Stacked color bar */}
              <div className="h-2.5 w-full rounded-full bg-muted flex overflow-hidden">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color} h-full`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Text list with percentages */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-2 text-[10px] font-mono">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground font-bold ml-auto">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
