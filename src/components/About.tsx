const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-8 animate-fade-in-up">
            About Me
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft animate-scale-in">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              I'm a dedicated full-stack developer with a passion for creating meaningful digital experiences. 
              My journey in web development began during my studies, where I discovered the power of code 
              to solve real-world problems and connect people through technology.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              I specialize in building responsive web applications using modern frameworks and best practices. 
              My approach combines technical expertise with user-centered design principles to deliver 
              solutions that are both functional and engaging.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I'm committed to continuous learning and staying current with emerging technologies. 
              Whether working independently or as part of a team, I strive to write clean, 
              maintainable code that contributes to successful project outcomes.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-pastel-pink rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-pastel-mint rounded-full text-sm font-medium">Lifelong Learner</span>
              <span className="px-4 py-2 bg-pastel-lavender rounded-full text-sm font-medium">Creative Thinker</span>
              <span className="px-4 py-2 bg-pastel-peach rounded-full text-sm font-medium">Team Collaborator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;