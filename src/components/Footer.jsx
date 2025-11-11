import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border mt-12 pt-8 relative">
      {/* Top Section */}
      

      {/* 3-column Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 text-xs text-muted-foreground">
        {/* Left */}
        <div>
          <p>Clean Code • Continuous Learning • Passion for Innovation</p>
          <p>All projects are built ethically and for professional purposes only.</p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} <strong>BharaniKumar V</strong>. All rights reserved.
          </p>
          <p>💻 Developed with clean code and creative vision.</p>

        </div>

        {/* Right */}
        <div className="font-mono text-primary text-sm md:text-right whitespace-nowrap">
           System.out.println("Code. Learn. Evolve.");

        </div>
      </div>

      {/* Scroll-to-top button */}
      <a
        href="#hero"
        className="absolute bottom-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
