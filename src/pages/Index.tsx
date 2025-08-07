import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
};

export default Index;
