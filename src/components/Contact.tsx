"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send, Terminal } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText("srivastava.rajat2004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Connection Ingress
          </h2>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2">
            Initiate Contact
          </h1>
        </div>

        {/* Linear Style Form Console */}
        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl overflow-hidden shadow-xl">
          
          {/* Header Console bar */}
          <div className="px-5 py-4 bg-muted/50 border-b border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
              connection_interface
            </span>
            <span className="text-[10px] text-muted-foreground/60">v1.0.0</span>
          </div>

          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Direct Coords */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">Direct Coordinates</span>
                
                {/* Email Copier */}
                <div className="p-4 rounded-xl border border-border bg-muted/40 flex flex-col justify-between min-h-[110px]">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-muted-foreground">EMAIL</span>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                      type="button"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                  <p className="text-xs font-mono font-bold text-foreground mt-4 truncate">srivastava.rajat2004@gmail.com</p>
                </div>

                {/* Git coordinates */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/Rajat125tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/40 border border-border rounded-xl hover:bg-accent transition-colors text-center font-mono text-[10px] text-muted-foreground hover:text-foreground"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajat-srivastava-bb079628a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/40 border border-border rounded-xl hover:bg-accent transition-colors text-center font-mono text-[10px] text-muted-foreground hover:text-foreground"
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>

              {/* Status details */}
              <div className="text-[9px] font-mono text-muted-foreground space-y-1">
                <p>Status: Open for opportunities</p>
                <p>Location: Jodhpur / Vellore, IN</p>
              </div>
            </div>

            {/* Right Column: Ingress Form */}
            <form onSubmit={handleSend} className="md:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-muted-foreground uppercase">Sender Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. SDE Lead Recruiter"
                    className="w-full bg-muted/40 border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-muted-foreground uppercase">Reply Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-muted/40 border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono text-muted-foreground uppercase">Message Query Payload</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Insert coordinates or message..."
                  className="w-full bg-muted/40 border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                />
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono rounded-lg"
                  >
                    ✓ Message successfully queued to srivastava.rajat2004@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full py-2.5 bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 text-xs font-mono font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                {status === "sending" ? "Transmitting..." : (
                  <>
                    Transmit Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
