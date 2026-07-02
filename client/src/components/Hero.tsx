import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/professional-hero-bg_273eb78f.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 cascade-enter" style={{ animationDelay: '0ms' }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              Data Analyst | Data Scientist | ML Engineer | AI Specialist
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight cascade-enter" style={{ animationDelay: '120ms' }}>
            Hi, I'm{" "}
            <span className="text-primary">
              Aditya Singh
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed cascade-enter" style={{ animationDelay: '240ms' }}>
            Data-focused professional at Maharshi Dayanand University with expertise in Machine Learning, AI, and Analytics. I build end-to-end ML pipelines, develop Power BI dashboards, and create intelligent workflows using Python, SQL, and cutting-edge technologies. Certified by AnalytixLabs, NPTEL, and FutureSkills Prime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 cascade-enter" style={{ animationDelay: '360ms' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 cascade-enter" style={{ animationDelay: '480ms' }}>
            <a
              href="https://github.com/Adi46878"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-primary/50 transition-all duration-300 text-foreground/60 hover:text-primary hover-bounce"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-singh-1aa846310/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-primary/50 transition-all duration-300 text-foreground/60 hover:text-primary hover-bounce"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aditya.30069@gmail.com"
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-primary/50 transition-all duration-300 text-foreground/60 hover:text-primary hover-bounce"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/50 uppercase tracking-widest">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
