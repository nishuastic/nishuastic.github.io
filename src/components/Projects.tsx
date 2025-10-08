import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import bikeCounters from "@/assets/bike-counters.jpg";
import companyAssistant from "@/assets/company-assistant.jpg";
import gossipSearch from "@/assets/gossip-search.jpg";
import flightDelay from "@/assets/flight-delay.jpg";

const projects = [
  {
    title: "Gossip Semantic Search Engine",
    description: "Full-stack semantic search application with FastAPI backend and Streamlit frontend processing RSS feed articles. Employs Sentence Transformers for embedding generation and Pinecone vector database for efficient similarity search.",
    image: gossipSearch,
    tags: ["Python", "FastAPI", "Streamlit", "Pinecone", "Sentence Transformers"],
    github: "https://github.com/nishuastic/gossip-semantic-search",
    featured: true
  },
  {
    title: "Company Assistant (OpenAI)",
    description: "AI-powered company assistant leveraging OpenAI's language models to provide intelligent responses and automate business workflows. Built with Python for seamless integration.",
    image: companyAssistant,
    tags: ["Python", "OpenAI", "AI Assistant", "NLP"],
    github: "https://github.com/nishuastic/company_assistant",
    featured: true
  },
  {
    title: "Predicting Bike Counters in Paris",
    description: "Stacked ensemble model combining Random Forest, LightGBM, and XGBoost for prediction of bike usage in Paris post-COVID. Utilizes temporal and geospatial features with hyperparameter optimization using Optuna.",
    image: bikeCounters,
    tags: ["Python", "Machine Learning", "XGBoost", "Optuna", "Data Science"],
    github: "https://github.com/nishuastic/bike_counters",
    featured: true
  },
  {
    title: "Flight Delay Prediction System",
    description: "Distributed flight delay prediction system using PySpark and Scala, processing 20GB+ aviation datasets with optimized join operations and memory management techniques.",
    image: flightDelay,
    tags: ["PySpark", "Scala", "Big Data", "Predictive Analytics"],
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in ML, AI, and data engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.featured && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-accent"
            onClick={() => window.open('https://github.com/nishuastic', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
