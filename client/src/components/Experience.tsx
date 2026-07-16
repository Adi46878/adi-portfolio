import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Analyst Intern - Atechnocrat Web Solutions",
    company: "Atechnocrat Web Solutions Pvt. Ltd.",
    period: "April - July 2026",
    duration: "3 months",
    description:
      "Completed a 3-month internship focused on data analytics and dashboard development. Worked on data collection, data cleaning, data scraping, dashboard creation, Excel analytics, and reporting tasks. Demonstrated strong learning ability and discipline throughout the internship.",
    achievements: [
      "Performed data collection and cleaning for multiple projects",
      "Created interactive dashboards for data visualization",
      "Conducted Excel analytics and reporting",
      "Implemented data scraping solutions for data acquisition",
    ],
    skills: ["Data Collection", "Data Cleaning", "Excel", "Dashboard Creation", "Reporting"],
  },
  {
    id: 2,
    title: "Data & AI Training Intern - AnalytixLabs",
    company: "AnalytixLabs",
    period: "July 2025 - Present",
    duration: "Ongoing",
    description:
      "Data Analytics - Data Science - Generative & Agentic AI. Gurugram, Haryana. Developed end-to-end ML pipelines, performed statistical analysis using Python, Pandas, NumPy and Excel, reducing inconsistencies. Developed a Power BI dashboards using DAX for KPI tracking; performed ad-hoc SQL analysis using joins, Window Functions, CTEs and dynamic charts.",
    achievements: [
      "Designed end-to-end ML pipelines for production deployment",
      "Developed Power BI dashboards with advanced DAX calculations",
      "Performed statistical analysis and data wrangling",
      "Implemented feature engineering and data preprocessing at scale",
    ],
    skills: ["Python", "SQL", "Power BI", "DAX", "Machine Learning"],
  },
  {
    id: 3,
    title: "Data Science Intern - YBI Foundation",
    company: "YBI Foundation",
    period: "June - July 2024",
    duration: "1 month",
    description:
      "Built a Flower Classification model using Decision Trees achieving high accuracy. Performed comprehensive EDA, feature engineering, and model evaluation using Scikit-learn and Matplotlib. Developed an Iris Flower Classification model with high precision and recall metrics.",
    achievements: [
      "Achieved high accuracy on flower classification task",
      "Implemented comprehensive EDA and feature analysis",
      "Optimized model performance through hyperparameter tuning",
      "Created detailed model evaluation reports",
    ],
    skills: ["Python", "Scikit-learn", "Matplotlib", "Decision Trees"],
  },
];

const education = [
  {
    degree: "B.Tech in Data Science",
    school: "Maharshi Dayanand University",
    year: "Oct 2022 - Aug 2026",
    details: "CGPA: 7.44 | Specialization: Data Science & Analytics",
  },
  {
    degree: "Intermediate (Class XII)",
    school: "DPSG Palam Vihar, Gurugram",
    year: "2021 - 2022",
    details: "Percentage: 71%",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 cascade-enter">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-foreground/70">
            A journey through roles and learning that shaped my expertise in data science
            and analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300 pb-8 last:pb-0"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-[9px]"></div>

                  {/* Content */}
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60 whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground/80 mb-2">
                        Key Achievements:
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-foreground/70 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-hover-lift"
                  style={{
                    animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-medium text-primary whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-primary/80 font-medium text-sm mb-2">
                    {edu.school}
                  </p>
                  <p className="text-xs text-foreground/60">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Key Certifications
              </h4>
              <div className="space-y-2">
                {[
                  "AnalytixLabs - Data Analyst & Data Scientist",
                  "NPTEL - Multiple Certifications",
                  "FutureSkills Prime - AI & ML Specialization",
                  "Skill India - Government Certifications",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-2 p-3 bg-muted rounded-lg border border-border"
                  >
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-sm text-foreground/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
