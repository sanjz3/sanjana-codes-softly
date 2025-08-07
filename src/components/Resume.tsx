import { Button } from '@/components/ui/button';
import { Download, FileText, Star } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume-sanjana.pdf'; // This would be the actual resume file
    link.download = 'Sanjana-Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4 animate-fade-in-up">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my professional background and experience
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft text-center animate-scale-in">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6 animate-float">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">My Professional Journey</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download my resume to see my complete professional background, 
                education, projects, and the skills I've developed along the way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-professional-blue/10 rounded-2xl p-6">
                <Star className="h-8 w-8 text-professional-blue mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-sm text-muted-foreground">Project highlights & achievements</p>
              </div>
              <div className="bg-professional-teal/10 rounded-2xl p-6">
                <Star className="h-8 w-8 text-professional-teal mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">Academic background & certifications</p>
              </div>
              <div className="bg-professional-green/10 rounded-2xl p-6">
                <Star className="h-8 w-8 text-professional-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Skills</h4>
                <p className="text-sm text-muted-foreground">Technical expertise & tools</p>
              </div>
            </div>
            
            <Button variant="magical" size="lg" onClick={handleDownload}>
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: December 2024 • PDF Format • 2 pages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;