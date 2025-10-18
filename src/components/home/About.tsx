import React from "react";
import {
  FaCode,
  FaRocket,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Product Builder",
      description:
        "Built TaleByYou - an AI-powered platform with paying customers",
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Full-Stack Expert",
      description: "React, TypeScript, Next.js, Python, FastAPI & more",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Educated",
      description: "CS & Math degree, trained at Google & Reichman Tech School",
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Always Learning",
      description: "Exploring frameworks, contributing to open source",
    },
  ];

  return (
    <section className="relative z-10 py-20 md:py-32 bg-background" id="about">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Story */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                full-stack developer
              </span>{" "}
              from Israel who builds stuff on the web. I studied CS and Math,
              got some training at Google and Reichman Tech School, and now I
              spend most of my time turning ideas into working products.
            </p>
            <p>
              Recently I built{" "}
              <span className="text-primary font-semibold">TaleByYou</span> - an
              AI platform that generates personalized kids books. It actually
              has paying customers, which is pretty cool. Before that I worked
              on a Discord-like chat app with custom WebSocket implementation
              and a system architecture simulator.
            </p>
            <p>
              Beyond code, I spend way too much time reading documentation for
              technologies I might never use. I&apos;ve got a folder full of
              half-finished projects I swear I&apos;ll come back to. When I need
              a break from screens, you&apos;ll find me at the gym or playing
              basketball - turns out debugging is easier after clearing your
              head.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {highlights.map((item, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="text-primary mx-auto group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 font-mono">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Python",
              "C#",
              "Node.js",
              "FastAPI",
              "PostgreSQL",
              "Prisma ORM",
              "Docker",
              "CI/CD",
              "AWS",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-primary/10 rounded-full text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
