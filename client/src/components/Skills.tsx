import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Brain,
  Database,
  GitBranch,
  LineChart,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      "Supervised & Unsupervised Learning",
      "Deep Learning & Neural Networks",
      "NLP & Text Classification",
      "Generative AI & LLMs",
      "Feature Engineering",
      "Model Evaluation & Optimization",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Databases",
    skills: [
      "SQL (Joins, CTEs, Window Functions)",
      "ETL Pipelines & Data Preprocessing",
      "Data Warehousing",
      "Database Design & Optimization",
      "Data Quality & Validation",
      "Streamlit & FastAPI",
    ],
  },
  {
    icon: LineChart,
    title: "Data Analysis & Visualization",
    skills: [
      "Power BI & DAX",
      "Tableau & Dashboards",
      "Statistical Analysis",
      "A/B Testing & Experimentation",
      "Data Storytelling",
      "Business Intelligence",
    ],
  },
  {
    icon: Zap,
    title: "Programming Languages",
    skills: [
      "Python (Primary)",
      "SQL",
      "R",
      "Git & Version Control",
      "Jupyter Notebooks",
      "VS Code & IDEs",
    ],
  },
  {
    icon: BarChart3,
    title: "Tools & Frameworks",
    skills: [
      "Pandas, NumPy, Scikit-learn",
      "TensorFlow, PyTorch, Keras",
      "NLTK, TextBlob, Transformers",
      "Matplotlib, Seaborn, Plotly",
      "XGBoost, LightGBM, CatBoost",
      "Pickle, Joblib, Model Serialization",
    ],
  },
  {
    icon: GitBranch,
    title: "Platforms & Cloud",
    skills: [
      "Google Colab & Jupyter",
      "GitHub & GitLab",
      "Kaggle Competitions",
      "Linux & Command Line",
      "Docker & Containerization",
      "AWS & GCP Basics",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 cascade-enter">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/70">
            A comprehensive toolkit built through hands-on experience in machine learning,
            data science, and analytics.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 p-6 group hover:shadow-lg hover:shadow-primary/5 card-hover-lift cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:bg-primary transition-all duration-300 group-hover:scale-125"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-16 border-t border-primary/20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 cascade-enter">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data Analyst | Data Scientist", org: "AnalytixLabs" },
              { title: "Introduction to Generative AI & ML", org: "Google - FutureSkills Prime" },
              { title: "Gold - Data Visualization & Analytics", org: "Silver - FutureSkills Prime" },
              { title: "NPTEL Certifications", org: "Multiple Courses" },
              { title: "Skill India Certifications", org: "Government of India" },
              { title: "NASSCOM Certifications", org: "Industry Recognized" },
            ].map((cert, index) => (
              <div
                key={cert.title}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 card-hover-lift cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-sm font-bold text-primary">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-foreground/60 mt-1">{cert.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
