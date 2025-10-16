import { projects } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCalendar,
} from "react-icons/fa";
import type { Metadata } from "next";
import ProjectsIndex from "@/components/projects/ProjectsIndex";
import TableOfContents from "@/components/projects/TableOfContent";
import { MDXContent } from "@/components/mdx/MDXContent";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Get project by slug
function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      publishedTime: project.date,
      images: project.image ? [{ url: project.image.src }] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.published) {
    notFound();
  }

  // Get all published projects for the index
  const publishedProjects = projects
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <FaArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* 3-Column Layout */}
        <div className="flex gap-8 relative">
          {/* LEFT: Projects Index - Sticky */}
          <ProjectsIndex isSticky={false} projects={publishedProjects} />

          {/* MIDDLE: Project Content */}
          <article className="flex-1 min-w-0">
            {/* Project Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <FaCalendar className="h-4 w-4" />
                  <time dateTime={project.date}>
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="h-4 w-4" />
                  <span>{project.metadata.readingTime} min read</span>
                </div>
                <div>
                  <span>{project.metadata.wordCount} words</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                    View Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </header>

            {/* Project Image */}
            {project.image ? (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8 bg-muted">
                <Image
                  src={project.image.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL={project.image.blurDataURL}
                />
              </div>
            ) : (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-9xl font-bold text-primary/30">
                  {project.title[0]}
                </span>
              </div>
            )}

            {/* Project Content */}
            {/* Project Content */}
            {/* Project Content */}
            <div id="project-content" className="max-w-none">
              <MDXContent code={project.content} />
            </div>
          </article>

          {/* RIGHT: Table of Contents - Fixed */}
          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents content={project.content} />
          </aside>
        </div>
      </div>
    </div>
  );
}
