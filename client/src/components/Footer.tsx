import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Adi46878" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-singh-1aa846310/" },
    { icon: Mail, label: "Email", href: "mailto:aditya.30069@gmail.com" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border py-12 md:py-16">
      <div className="container">
        {/* Resume Section */}
        <div className="mb-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Download My Resume</h3>
              <p className="text-sm text-foreground/60">Get a complete overview of my experience and skills</p>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1UAeWhwft03zMmIE7sH7JvoCxKokBasDT/view?usp=drive_link', '_blank');
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              Aditya Singh
            </h3>
            <p className="text-sm text-foreground/60">
              Transforming data into actionable insights through advanced
              analytics and machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-all border border-primary/20 hover:border-primary/50"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/50">
              © {currentYear} Data Scientist Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-foreground/50">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
