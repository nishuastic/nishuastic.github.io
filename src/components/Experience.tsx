import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "ML Engineer Intern",
    company: "Linkup",
    description: "AI search API for developers",
    period: "Mar 2025 - Aug 2025",
    highlights: [
      "Carried clustering analysis on 450K+ queries with 85% segment coherence using K-means, HDBSCAN, and FAISS",
      "Conducted CPM analysis identifying cost optimization opportunities, influencing company's pivot to index-based architecture",
      "Built heuristic classifier reducing query latency from 2.1s to 630ms, yielding 14% cost reduction",
      "Deployed multi-tier fallback system reducing failed requests by 76% and empty responses by 53%"
    ]
  },
  {
    title: "AI Engineer Intern",
    company: "Dzylo",
    description: "AI-powered interior design platform",
    period: "Aug 2023 - Jan 2024",
    highlights: [
      "Architected 'Daizy', an AI chatbot improving query response efficiency by 25%",
      "Created object label detection API using Google Vision with 95% accuracy",
      "Migrated Angular backend to Python FastAPI, increasing system scalability"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Neurals.ai",
    description: "AI/ML consulting platform",
    period: "Nov 2022 - Apr 2023",
    highlights: [
      "Created automated KYC verification system with computer vision pipeline",
      "Engineered comprehensive research pipeline through web scraping",
      "Implemented RAG pipeline leveraging LangChain and Pinecone for document processing"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-accent mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="block w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
