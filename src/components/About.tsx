import { GraduationCap, MapPin, Award, Users, Heart, Camera, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Summary */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ML Engineer with hands-on experience developing production-grade AI systems and 
              optimizing data pipelines. Experience building machine learning models for customer 
              segmentation, cost optimization, and query processing systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in Python, cloud platforms, and full-stack development with a focus on 
              performance optimization and system reliability.
            </p>
          </div>

          {/* Education & Location */}
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">MScT Data Science & AI</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    École Polytechnique & HEC Paris
                  </p>
                  <p className="text-accent text-sm">3.84/4.0 GPA • Class Representative</p>
                  <p className="text-muted-foreground text-xs mt-1">Sep 2024 - Jun 2026</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">B.E. Information & Communication Technology</h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    Gujarat Technological University
                  </p>
                  <p className="text-accent text-sm">9.65/10.0 CGPA • Branch Topper (1/204)</p>
                  <p className="text-muted-foreground text-xs mt-1">Aug 2019 - May 2023</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Paris, France</h4>
                  <p className="text-muted-foreground text-sm">Currently based in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests & Leadership */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Leadership & <span className="text-gradient">Interests</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Community Leadership</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Founder & President of MX-India Club at École Polytechnique, fostering 
                    cultural exchange and community engagement among students.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Social Impact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Food rescue volunteer at Robin Hood Army, contributing to community 
                    welfare and food security initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sports & Wellness</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Active badminton player and co-organizer at Racing Club de France, 
                    promoting fitness and team building.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Creative Pursuits</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Amateur photographer capturing moments and exploring visual storytelling 
                    through the lens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
