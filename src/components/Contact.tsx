import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about ML and AI
        </p>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:nishuastic@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    nishuastic@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+33780827985"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (+33) 07 80 82 79 85
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="font-semibold mb-2">Connect with me</h3>
              
              <Button 
                variant="outline"
                className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('https://github.com/nishuastic', '_blank')}
              >
                <Github className="h-5 w-5 mr-3" />
                GitHub
              </Button>

              <Button 
                variant="outline"
                className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('https://linkedin.com/in/nishuastic', '_blank')}
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </Button>

              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 glow-primary mt-4"
                onClick={() => window.location.href = 'mailto:nishuastic@gmail.com'}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p className="mb-2">
            Designed & Built by Nischay Parekh
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
