import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border glass mt-24">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono font-bold text-xl tracking-tighter text-foreground">
            rajat<span className="text-muted-foreground/60">.dev</span>
          </span>
          <p className="text-sm text-muted-foreground">
            Building intelligent systems for the future.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Rajat125tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/rajat-srivastava-bb079628a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:srivastava.rajat2004@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center py-6 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rajat Srivastava. All rights reserved.
      </div>
    </footer>
  );
}
