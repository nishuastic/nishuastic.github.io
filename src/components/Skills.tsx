import { Code2, Database, Cloud, Wrench } from "lucide-react";
import {
  siPython,
  siPostgresql,
  siR,
  siC,
  siTypescript,
  siScala,
  siScikitlearn,
  siTensorflow,
  siHuggingface,
  siGooglecloud,
  siFastapi,
  siDocker,
  siDatadog,
  siApachespark,
  siNumpy,
  siPandas,
  siGit,
  siJupyter,
  siPlotly,
} from "simple-icons";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: siPython },
      { name: "SQL", icon: siPostgresql },
      { name: "R", icon: siR },
      { name: "Java", icon: null },
      { name: "C", icon: siC },
      { name: "TypeScript", icon: siTypescript },
      { name: "Scala", icon: siScala },
    ]
  },
  {
    title: "ML/AI Technologies",
    icon: Database,
    skills: [
      { name: "Scikit-learn", icon: siScikitlearn },
      { name: "TensorFlow", icon: siTensorflow },
      { name: "HuggingFace", icon: siHuggingface },
      { name: "Sentence-Transformers", icon: null },
      { name: "LangChain", icon: null },
      { name: "Prompt Engineering", icon: null },
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS S3", icon: null },
      { name: "Azure AI Foundry", icon: null },
      { name: "Google Cloud NLP", icon: siGooglecloud },
      { name: "FastAPI", icon: siFastapi },
      { name: "Docker", icon: siDocker },
      { name: "Datadog", icon: siDatadog },
    ]
  },
  {
    title: "Data Technologies",
    icon: Wrench,
    skills: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Metabase", icon: null },
      { name: "PySpark", icon: siApachespark },
      { name: "Pinecone", icon: null },
      { name: "NumPy", icon: siNumpy },
      { name: "Pandas", icon: siPandas },
    ]
  }
];

const TechIcon = ({ iconData, name }: { iconData: any; name: string }) => {
  if (!iconData) {
    return <span className="text-sm font-medium">{name}</span>;
  }

  return (
    <div className="flex items-center gap-2">
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill={`#${iconData.hex}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconData.path} />
      </svg>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive toolkit for building scalable AI systems and data solutions
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-all cursor-default hover:scale-105"
                    >
                      <TechIcon iconData={skill.icon} name={skill.name} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Development Tools</h4>
              <div className="flex flex-wrap gap-3 mt-3">
                {[
                  { name: "Git", icon: siGit },
                  { name: "Jupyter", icon: siJupyter },
                  { name: "Plotly", icon: siPlotly },
                  { name: "Matplotlib", icon: null },
                  { name: "Seaborn", icon: null },
                ].map((tool, idx) => (
                  <div 
                    key={idx}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-sm"
                  >
                    <TechIcon iconData={tool.icon} name={tool.name} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Languages</h4>
              <ul className="space-y-1 text-sm">
                <li>• English (Proficient - C1)</li>
                <li>• Hindi (Proficient - C1)</li>
                <li>• Gujarati (Native - C2)</li>
                <li>• French (Beginner - A2)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-foreground mb-2">Key Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Problem-Solving", "Critical Thinking", "Cross-functional Collaboration", "Technical Writing"].map((comp, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground">
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
