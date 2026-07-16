"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import LeetCodeDashboard from "@/components/LeetCodeDashboard";
import GitHubDashboard from "@/components/GitHubDashboard";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <LeetCodeDashboard />
      <GitHubDashboard />
      <Research />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}
