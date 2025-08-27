import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Let's Connect! 💌
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether it's about a project, collaboration, or just to say hi
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft text-center animate-scale-in">
            <div className="mb-8">
              <Heart className="h-12 w-12 text-pastel-pink mx-auto mb-4 animate-bounce-soft" />
              <h3 className="text-2xl font-bold mb-4">Ready to build something amazing together?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and meet fellow developers. 
                Drop me a line and let's create something beautiful!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="cute" size="lg" asChild>
                <a href="mailto:sanjana@example.com">
                  <Mail className="h-5 w-5" />
                  sanjana@example.com
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button variant="soft" size="icon" asChild>
                <a href="https://github.com/sanjana" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="warm" size="icon" asChild>
                <a href="https://linkedin.com/in/sanjana" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>Built with 💖 using React, TypeScript, and lots of coffee!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;