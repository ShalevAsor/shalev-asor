import Link from "next/link";
import { Project } from "../../../.velite";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      key={project.slug}
      href={project.permalink}
      id={project.slug}
      className="group scroll-mt-24"
    >
      <article className="h-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <Image
              src={project.image.src}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              placeholder="blur"
              blurDataURL={project.image.blurDataURL}
            />
          </div>
        )}
        {!project.image && (
          <div className="relative h-48 w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-6xl font-bold text-primary/30">
              {project.title[0]}
            </span>
          </div>
        )}

        {/* Project Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h2>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
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
    </Link>
  );
}
