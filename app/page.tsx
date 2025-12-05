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
          <div className="hidden md:flex items-center gap-10 text-base font-medium text-gray-400">
            <a href="#projects" className="hover:text-clepto-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-clepto-cyan transition-colors">Experience</a>
            <a href="#skills" className="hover:text-clepto-cyan transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Projects Section with Neuron Background */}
      <section id="projects" className="relative py-28 bg-navy-darker overflow-hidden">
        <NeuronBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Featured Impact</h2>
              <p className="text-gray-400 text-lg sm:text-xl">
                Selected case studies demonstrating AI automation, data engineering, and compliance frameworks that deliver measurable business results.
              </p>
            </div>
          </div>

          <ProjectsGrid />
        </div>
      </section>

      {/* Experience Section with Neuron Background */}
      <section id="experience" className="relative py-28 bg-clepto-navy overflow-hidden">
        <NeuronBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-20 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Professional Journey</h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            7+ years of experience in CRM, Data Engineering, and AI Automation across enterprise clients.
          </p>
        </div>
        <div className="relative z-10">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-navy-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center text-white">Technical Arsenal</h2>
          <SkillsGrid />
        </div>
      </section>

      <CTASection />

      {/* Footer */}
      <footer className="py-10 bg-clepto-navy border-t border-gray-800 text-center text-base text-gray-500">
        <p>© 2025 Mayank Khanvilkar. All rights reserved.</p>
      </footer>
    </main>
  );
}
