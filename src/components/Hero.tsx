"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Award, Cpu, BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-10 overflow-hidden bg-black text-white">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TEXT CONTENT & BADGES */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Real Credentials Badges */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-yellow-500" />
                Rank 1 AIML @ VIT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                IIT Jodhpur Research Intern
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-mono">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                350+ LeetCode Problems
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Rajat Srivastava
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-zinc-400">
                AI/ML Engineer &amp; Systems Developer
              </p>
            </div>

            {/* Intro */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-sans font-light leading-relaxed">
              B.Tech CSE (AI &amp; ML) candidate at VIT Vellore. Top of department with a 9.74 CGPA. Specialize in ML model pipelines, low-latency search indices, and production-ready full-stack software.
            </p>

            {/* Actions & Links */}
            <div className="flex flex-wrap gap-4 items-center mt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-black hover:bg-zinc-200 font-medium font-mono text-sm rounded-xl transition-all"
              >
                Inspect Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-sm rounded-xl transition-all"
              >
                <Download className="w-4 h-4" />
                Resume PDF
              </a>
            </div>

            {/* Social Coordinates */}
            <div className="flex items-center gap-6 mt-4 text-zinc-500">
              <a
                href="https://github.com/Rajat125tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-sm font-mono"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rajat-srivastava-bb079628a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-sm font-mono"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: PORTRAIT PHOTO */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-[380px] rounded-2xl border border-zinc-800 bg-zinc-950 p-2 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/image.png"
                  alt="Rajat Srivastava"
                  fill
                  className="object-cover filter saturate-[0.85] contrast-[1.05]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
