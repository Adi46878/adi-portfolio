import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Loan Default Risk Prediction System",
    description:
      "Built an end-to-end ML pipeline to predict customer loan default risk using financial indicators including income, debt, and employment history. Implemented data preprocessing, feature engineering, and model serialization using Pickle. Deployed responsive UI using React with GitHub-hosted automated deployment.",
    image: "bg-gradient-to-br from-primary/20 to-chart-2/20",
    tags: ["Python", "Machine Learning", "React", "GitHub"],
    featured: true,
    links: {
      github: "https://github.com/Adi46878/banking-app-flask",
      demo: "https://banking-app-flask.onrender.com",
    },
  },
  {
    id: 2,
    title: "Network Intrusion Detection System",
    description:
      "Developed an NIDS on 800,000+ record cybersecurity datasets using Random Forest and Decision Tree algorithms achieving high attack accuracy. Handled class imbalance, feature engineering, and multiclass attack classification. Optimized GridSearchCV and SVM hyperparameters.",
    image: "bg-gradient-to-br from-chart-3/20 to-primary/20",
    tags: ["Python", "Machine Learning", "Cybersecurity"],
    featured: true,
    links: {
      github: "https://github.com/Adi46878/network-intrusion-detection-system",
      demo: null,
    },
  },
  {
    id: 3,
    title: "Iris Flower Classification",
    description:
      "Developed an Iris flower classification model using Decision Trees achieving high accuracy. Implemented comprehensive EDA, feature engineering, and model evaluation using Scikit-learn and Matplotlib.",
    image: "bg-gradient-to-br from-chart-4/20 to-chart-2/20",
    tags: ["Python", "Scikit-learn", "Classification"],
    featured: false,
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
  {
    id: 4,
    title: "Power BI Data Analysis & Visualization",
    description:
      "Developed a Power BI dashboard for KPI tracking and data visualization. Created interactive reports with DAX calculations, performed ad-hoc SQL analysis using joins, Window Functions, CTEs, and dynamic charts.",
    image: "bg-gradient-to-br from-primary/20 to-chart-3/20",
    tags: ["Power BI", "DAX", "SQL", "Data Visualization"],
    featured: false,
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
  {
    id: 5,
    title: "NLP & Text Classification",
    description:
      "Built NLP pipelines for text classification tasks. Implemented sentiment analysis, text preprocessing, and feature extraction using NLTK, TextBlob, and Scikit-learn.",
    image: "bg-gradient-to-br from-chart-2/20 to-primary/20",
    tags: ["NLP", "NLTK", "Text Classification"],
    featured: false,
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
  {
    id: 6,
    title: "Data Science & ML Specialization",
    description:
      "Completed comprehensive data science specialization covering machine learning, statistical analysis, data visualization, and advanced analytics techniques with hands-on projects.",
    image: "bg-gradient-to-br from-chart-3/20 to-chart-4/20",
    tags: ["Data Science", "Machine Learning", "Analytics"],
    featured: false,
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 cascade-enter">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70">
            A selection of my recent work showcasing expertise in machine learning,
            data analysis, and visualization.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 bg-card card-hover-lift"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 ${project.image} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.4s ease-out ${0.2 + tagIndex * 0.05}s both`,
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-border hover:bg-muted text-foreground hover:text-primary transition-all duration-300 hover-bounce"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.links.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover-bounce"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 cascade-enter">
            Other Notable Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 bg-card p-6 card-hover-lift"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(index + 2) * 0.1}s both`,
                }}
              >
                <div className={`absolute inset-0 ${project.image} opacity-30`}></div>
                <div className="relative">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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
