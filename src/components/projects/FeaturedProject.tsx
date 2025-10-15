"use client";
import Link from "next/link";
import { Project } from "../../../.velite";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article
      id={project.slug}
      className="group scroll-mt-24 h-full bg-card border-2 border-border rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      {/* Featured Badge */}
      <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
        ⭐ Featured
      </div>

      {/* Project Image - Make this clickable to detail page */}
      <Link href={project.permalink} className="block">
        {project.image ? (
          <div className="relative h-64 w-full overflow-hidden bg-muted">
            <Image
              src={project.image.src}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              placeholder="blur"
              blurDataURL={project.image.blurDataURL}
            />
          </div>
        ) : (
          <div className="relative h-64 w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-6xl font-bold text-primary/30">
              {project.title[0]}
            </span>
          </div>
        )}
      </Link>

      {/* Project Content */}
      <div className="p-6">
        {/* Title - Also clickable to detail page */}
        <Link href={project.permalink}>
          <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
            {project.title}
          </h2>
        </Link>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 ">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-ring/70 text-xs bg-secondary px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* External Links - GitHub and Demo */}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors text-sm"
                onClick={(e) => e.stopPropagation()} // Prevent any parent click handlers
              >
                <FaGithub className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors text-sm"
                onClick={(e) => e.stopPropagation()} // Prevent any parent click handlers
              >
                <FaGlobe className="h-4 w-4" />
                <span>Live</span>
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors text-sm"
          >
            Read
          </Link>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
          <span>
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </span>
          <span>{project.metadata.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}
