"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
            <Mail className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 glow-text">
            Let's Build Together
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <form className="glass p-8 rounded-3xl border border-border text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-accent/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
              />
            </div>
            
            <button
              type="button"
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
