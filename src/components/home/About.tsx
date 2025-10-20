import Link from "next/link";
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
              from Israel who builds production-ready web applications. I
              studied CS and Math at Ariel University, completed the Developers
              Boost program at Google and Reichman University, and now spend
              most of my time turning ideas into working products.
            </p>
            <p>
              Recently I built{" "}
              <Link
                href={"/projects/talebyyou"}
                className="text-primary font-semibold hover:border-b hover:border-primary"
              >
                TaleByYou
              </Link>{" "}
              - an AI-powered platform that generates personalized
              children&apos;s books. It has paying customers and handles
              everything from AI image generation to print-on-demand
              fulfillment. Before that, I built{" "}
              <Link
                href={"/projects/channels"}
                className="text-primary font-semibold hover:border-b hover:border-primary"
              >
                Channels
              </Link>{" "}
              - a Discord clone with a custom WebSocket server I wrote from
              scratch, supporting real-time messaging and voice/video calls.
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

        {/* Featured Projects Preview - ADD THIS IN About.tsx */}
        <div className="max-w-4xl mx-auto mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TaleByYou Card */}
            <Link
              href="/projects/talebyyou"
              className="group p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  TaleByYou
                </h4>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full font-medium">
                  Live
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI-powered platform for personalized children&apos;s books with
                paying customers. Full e-commerce, print-on-demand, automated
                fulfillment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  Leonardo AI
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  PostgreSQL
                </span>
              </div>
            </Link>

            {/* Channels Card */}
            <Link
              href="/projects/channels"
              className="group p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Channels
                </h4>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full font-medium">
                  Complete
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Discord clone with custom WebSocket server built from scratch.
                Real-time messaging, voice/video calls, file sharing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  WebSocket
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  LiveKit
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  Node.js
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group text-lg"
            >
              View all projects
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
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
              "MongoDB",
              "Prisma",
              "Tailwind CSS",
              "Docker",
              "Git",
              "AWS S3",
              "Redis",
              "WebSocket",
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
