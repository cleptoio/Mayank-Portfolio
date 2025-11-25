import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { CTASection } from "@/components/CTASection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-clepto-navy selection:bg-clepto-cyan/20">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-clepto-navy/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-medium text-white tracking-tight">Mayank Khanvilkar</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="#projects" className="hover:text-clepto-cyan transition-colors">Projects</a>
              <a href="#experience" className="hover:text-clepto-cyan transition-colors">Experience</a>
              <a href="#skills" className="hover:text-clepto-cyan transition-colors">Skills</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-navy-darker">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Impact</h2>
              <p className="text-gray-400 max-w-xl">
                Selected case studies demonstrating AI automation and compliance frameworks.
              </p>
            </div>
          </div>

          <ProjectsGrid />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-clepto-navy">
        <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Journey</h2>
          <p className="text-gray-400">
            8+ years of experience in CRM, Data Engineering, and AI Automation.
          </p>
        </div>
        <ExperienceTimeline />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-navy-darker">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Technical Arsenal</h2>
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
