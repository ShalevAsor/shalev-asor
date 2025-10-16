import Link from "next/link";
import { Project } from "../../../.velite";
interface ProjectsIndexProps {
  projects: Project[];
  isSticky?: boolean;
}
// backdrop-blur nav -> div

export default function ProjectsIndex({
  projects,
  isSticky = true,
}: ProjectsIndexProps) {
  return (
    <aside className="hidden lg:block shrink-0">
      <nav className={`${isSticky ? "sticky top-40" : ""}`}>
        <div
          className={`${
            isSticky ? "border-2 bg-card/50" : ""
          }  border-primary rounded-lg p-4  backdrop-blur`}
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
            Index
          </h3>
          <ul className="space-y-2">
            {projects.map((project, idx) => (
              <li key={project.slug} className="group font-mono">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-start gap-3 py-2 px-2 rounded transition-colors"
                >
                  <div className="flex gap-x-2 items-center">
                    <span className="text-primary font-bold shrink-0 group-hover:text-ring transition-transform">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-foreground group-hover:text-ring transition-colors leading-tight">
                      {project.title}
                    </span>
                  </div>
                </Link>
                {/* Separator line */}
                {idx < projects.length - 1 && (
                  <div className="h-px bg-border mt-2 group-hover:bg-primary" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
