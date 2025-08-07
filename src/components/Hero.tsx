import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-pink rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pastel-mint rounded-full opacity-40 animate-bounce-soft"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pastel-lavender rounded-full opacity-25 animate-float"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-scale-in">
            Hi, I'm Sanjana! 
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Turning coffee ☕ into code 💻 with a sprinkle of magic ✨
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Aspiring full-stack developer who believes that beautiful code creates beautiful experiences. 
            I love crafting web applications that are not just functional, but delightful to use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cute" size="lg" onClick={scrollToAbout}>
              Learn About Me
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="soft" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce-soft"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;