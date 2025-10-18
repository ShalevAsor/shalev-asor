import { projects } from "#site/content";
import { Metadata } from "next";
import ProjectsIndex from "@/components/projects/ProjectsIndex";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my projects and work",
};

export default function ProjectsPage() {
  // Filter only published projects and sort by date (newest first)
  const publishedProjects = projects
    .filter((project) => project.published)
    .sort((a, b) => {
      // First, sort by featured (featured items come first)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // If both have the same featured status, sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  // Separate featured projects
  const featuredProjects = publishedProjects.filter((p) => p.featured);

  return (
    <div className="min-h-screen py-12 px-4 mt-6 ">
      <div className="container mx-auto max-w-7xl">
        {/* Main Layout: Index Sidebar + Content */}
        <div className="flex gap-8 relative">
          {/* Index Sidebar - Hidden on mobile, visible on large screens */}
          <ProjectsIndex projects={publishedProjects} />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header with Title and Counter */}
            <div className="flex items-end justify-between mb-12 pb-6 ">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold">Projects</h1>
                <p className="text-muted-foreground mt-2">
                  Things I&apos;ve built and learned from
                </p>
              </div>

              {/* Projects Counter */}
              <div className="flex flex-col items-end">
                <div className="text-5xl font-bold text-primary">
                  {publishedProjects.length}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {publishedProjects.length === 1 ? "Project" : "Projects"}
                </div>
              </div>
            </div>

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <div className="border-b border-border flex-1"></div>
                  <span className="px-4 text-sm uppercase tracking-widest text-muted-foreground">
                    Featured
                  </span>
                  <div className="border-b border-border flex-1"></div>
                </div>

                {/* Featured Projects Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredProjects.map((project) => (
                    <FeaturedProject key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            )}

            {/* All Projects Section */}
            <section>
              <div className="flex items-center justify-center mb-8">
                <div className="border-b border-border flex-1"></div>
                <span className="px-4 text-sm uppercase tracking-widest text-muted-foreground">
                  All Projects
                </span>
                <div className="border-b border-border flex-1"></div>
              </div>

              {/* All Projects Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedProjects.map((project) => (
                  <ProjectCard project={project} key={project.slug} />
                ))}
              </div>
            </section>

            {/* Empty State */}
            {publishedProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
