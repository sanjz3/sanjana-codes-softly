import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Paradise',
      description: 'A beautiful shopping platform with modern design, cart functionality, and seamless user experience. Built with React and styled with love.',
      image: project1,
      github: 'https://github.com/sanjana/ecommerce-paradise',
      demo: 'https://ecommerce-paradise.demo.com',
      tech: ['React', 'Node.js', 'MongoDB', 'CSS3']
    },
    {
      title: 'Weather Wonder',
      description: 'A delightful weather app that makes checking the forecast fun! Features beautiful animations and accurate weather data.',
      image: project2,
      github: 'https://github.com/sanjana/weather-wonder',
      demo: 'https://weather-wonder.demo.com',
      tech: ['JavaScript', 'API Integration', 'CSS3', 'HTML5']
    },
    {
      title: 'Task Master Pro',
      description: 'A productivity app that helps you organize your life with style. Beautiful task management with calendar integration.',
      image: project3,
      github: 'https://github.com/sanjana/task-master-pro',
      demo: 'https://task-master-pro.demo.com',
      tech: ['React', 'Express', 'MongoDB', 'Node.js']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-warm/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4 animate-fade-in-up">
            My Projects 🚀
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've built with passion and creativity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="cute" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="soft" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;