const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-8 animate-fade-in-up">
            About Me 💖
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft animate-scale-in">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Hey there! I'm a passionate developer who fell in love with coding because it lets me 
              build things that matter. Every line of code is an opportunity to solve problems, 
              create joy, and make someone's day a little brighter.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or learning about the latest web development trends. 
              I believe that continuous learning is the key to growth, and I'm always excited 
              to take on new challenges.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              My goal is to create web applications that are not only functional but also 
              beautiful, accessible, and user-friendly. I love the intersection of design 
              and development, where creativity meets logic to build amazing experiences.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-pastel-pink rounded-full text-sm font-medium">Problem Solver 🧩</span>
              <span className="px-4 py-2 bg-pastel-mint rounded-full text-sm font-medium">Lifelong Learner 📚</span>
              <span className="px-4 py-2 bg-pastel-lavender rounded-full text-sm font-medium">Creative Thinker 🎨</span>
              <span className="px-4 py-2 bg-pastel-peach rounded-full text-sm font-medium">Team Player 🤝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;