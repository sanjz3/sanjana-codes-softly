import { Code, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      gradient: 'bg-gradient-primary',
      color: 'text-white'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express'],
      gradient: 'bg-gradient-secondary',
      color: 'text-white'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'MongoDB'],
      gradient: 'bg-gradient-warm',
      color: 'text-foreground'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and frameworks I work with to build robust web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${category.gradient} rounded-3xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1`}>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${category.color} mb-4`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center transform transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        <span className={`font-medium ${category.color}`}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;