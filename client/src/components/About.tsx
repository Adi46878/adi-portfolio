import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Introduction & Bio - Left Column */}
          <div>
            <div className="mb-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Who I Am
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-foreground">data-focused professional</span> pursuing a B.Tech in Data Science at Maharshi Dayanand University. With hands-on training in Data Analytics, Machine Learning, and Generative & Agentic AI, I specialize in transforming complex datasets into actionable insights.
              </p>

              <p>
                My expertise spans <span className="font-semibold text-foreground">end-to-end ML pipelines</span>, advanced data analysis, and intelligent system development. I'm proficient in Python, SQL, and Power BI, with proven experience in building production-ready solutions that drive business impact.
              </p>

              <p>
                Currently working as a <span className="font-semibold text-foreground">Data & AI Training Intern at AnalytixLabs</span>, where I develop sophisticated data solutions and explore cutting-edge AI technologies. I'm passionate about leveraging data science and AI to solve real-world problems and create meaningful value.
              </p>

              <p>
                Certified by <span className="font-semibold text-foreground">AnalytixLabs, NPTEL, and FutureSkills Prime</span>, I bring industry-recognized expertise and a commitment to continuous learning in the rapidly evolving field of data science and artificial intelligence.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Education", value: "B.Tech Data Science" },
                  { label: "Location", value: "Gurugram, Haryana" },
                  { label: "Experience", value: "ML & AI Focus" },
                  { label: "Certifications", value: "3+ Industry Certs" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs text-foreground/60 mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Picture - Right Column (Centered in the gap) */}
          <div className="flex justify-center items-start md:items-center">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src="https://github.com/Adi46878/adi-portfolio/blob/main/photoadi.png?raw=true"
                  alt="Aditya Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Accent Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
