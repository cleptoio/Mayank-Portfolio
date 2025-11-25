import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CASE_STUDIES } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/20">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold font-mono tracking-tighter">MK.</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Impact</h2>
              <p className="text-muted-foreground max-w-xl">
                Selected case studies demonstrating AI automation and compliance frameworks.
              </p>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground font-mono">
              Scroll for more →
            </div>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {CASE_STUDIES.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-muted-foreground">
            8+ years of experience in CRM, Data Engineering, and AI Automation.
          </p>
        </div>
        <ExperienceTimeline />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <SkillsGrid />
        </div>
      </section>

      {/* Contact / Footer */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's build compliance-ready AI workflows that scale with your business.
          </p>
          <a
            href="mailto:khanvilkarmayank@gmail.com"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:text-white transition-colors"
          >
            Let's Build Together
          </a>

          <footer className="mt-24 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2025 Mayank Khanvilkar. All rights reserved.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
