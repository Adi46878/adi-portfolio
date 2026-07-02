import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Cpu, Code2, Database, Layers, Wrench } from "lucide-react";

const aiExpertise = [
  {
    title: "Generative AI",
    description: "Building intelligent systems with LLMs, prompt engineering, and AI-powered workflows",
    technologies: [
      "LLMs & Transformers",
      "Prompt Engineering",
      "RAG Systems",
      "Fine-tuning",
      "Text Generation",
      "Semantic Search",
    ],
    icon: Zap,
  },
  {
    title: "Agentic AI",
    description: "Developing autonomous AI agents with reasoning, planning, and decision-making capabilities",
    technologies: [
      "Agent Architectures",
      "Multi-Agent Systems",
      "Tool Integration",
      "Reasoning Engines",
      "Autonomous Workflows",
      "Agent Orchestration",
    ],
    icon: Cpu,
  },
];

const toolsAndFrameworks = [
  {
    category: "AI & LLM Frameworks",
    icon: Code2,
    tools: [
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "Hugging Face",
      "Transformers",
      "Prompt Engineering",
    ],
  },
  {
    category: "Data Processing & Analysis",
    icon: Database,
    tools: [
      "Pandas",
      "NumPy",
      "Polars",
      "DuckDB",
      "Apache Spark",
      "Data Wrangling",
    ],
  },
  {
    category: "ML & Deep Learning",
    icon: Layers,
    tools: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "Keras",
    ],
  },
  {
    category: "Development & Deployment",
    icon: Wrench,
    tools: [
      "Python",
      "SQL",
      "Git",
      "Docker",
      "FastAPI",
      "Streamlit",
    ],
  },
];

const platformsAndLibraries = [
  "Jupyter Notebook",
  "Google Colab",
  "VS Code",
  "GitHub",
  "Kaggle",
  "Linux",
  "Power BI",
  "Tableau",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "NLTK",
  "TextBlob",
];

export default function AIAndTools() {
  return (
    <section id="ai-tools" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Generative & Agentic AI
          </h2>
          <p className="text-lg text-foreground/70">
            Expertise in cutting-edge AI technologies including Large Language Models, 
            autonomous agents, and intelligent system architecture.
          </p>
        </div>

        {/* AI Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiExpertise.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <Card
                key={expertise.title}
                className="bg-card border-border hover:border-primary/30 transition-all duration-300 p-8 group hover:shadow-lg hover:shadow-primary/5"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {expertise.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {expertise.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tools & Frameworks */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Tools & Frameworks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsAndFrameworks.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.category}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300 p-6 group hover:shadow-lg hover:shadow-primary/5"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {/* Category Icon */}
                  <div className="mb-4 inline-flex p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Category Title */}
                  <h4 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.category}
                  </h4>

                  {/* Tools List */}
                  <ul className="space-y-2">
                    {category.tools.map((tool) => (
                      <li
                        key={tool}
                        className="flex items-center text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/50 mr-2 group-hover:bg-primary transition-colors"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platforms & Libraries */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Platforms & Libraries
          </h3>
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="flex flex-wrap gap-3">
              {platformsAndLibraries.map((platform) => (
                <Badge
                  key={platform}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm"
                >
                  {platform}
                </Badge>
              ))}
            </div>
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
      `}</style>
    </section>
  );
}
