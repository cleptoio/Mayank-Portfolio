import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { CTASection } from "@/components/CTASection";
import { NeuronBackground } from "@/components/NeuronBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-clepto-navy selection:bg-clepto-cyan/20">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-clepto-navy/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#projects" className="hover:text-clepto-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-clepto-cyan transition-colors">Experience</a>
            <a href="#skills" className="hover:text-clepto-cyan transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Projects Section with Neuron Background */}
      <section id="projects" className="relative py-24 bg-navy-darker overflow-hidden">
        <NeuronBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">Featured Impact</h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Selected case studies demonstrating AI automation and compliance frameworks.
              </p>
            </div>
          </div>

          <ProjectsGrid />
        </div>
      </section>

      {/* Experience Section with Neuron Background */}
      <section id="experience" className="relative py-24 bg-clepto-navy overflow-hidden">
        <NeuronBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-16 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">Professional Journey</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            7+ years of experience in CRM, Data Engineering, and AI Automation.
          </p>
        </div>
        <div className="relative z-10">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-navy-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-white">Technical Arsenal</h2>
          <SkillsGrid />
        </div>
      </section>

      <CTASection />

      {/* Footer */}
      <footer className="py-8 bg-clepto-navy border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2025 Mayank Khanvilkar. All rights reserved.</p>
      </footer>
    </main>
  );
}
