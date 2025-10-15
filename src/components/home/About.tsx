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
      icon: <FaRocket className="w-6 h-6" />,
      title: "Product Builder",
      description:
        "Built TaleByYou - an AI-powered platform with paying customers",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full-Stack Expert",
      description: "React, TypeScript, Next.js, Python, FastAPI & more",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Educated",
      description: "CS & Math degree, trained at Google & Reichman Tech",
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Always Learning",
      description: "Exploring frameworks, contributing to open source",
    },
  ];

  return (
    <section className="relative z-10 py-4 md:py-6 bg-background" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a{" "}
                  <span className="text-primary font-semibold">
                    full-stack developer
                  </span>{" "}
                  who loves building things that solve real problems. Whether
                  it's creating production-ready applications, experimenting
                  with new technologies, or contributing to open source, I'm
                  always looking for ways to grow.
                </p>
                <p>
                  I recently built{" "}
                  <span className="text-primary font-semibold">TaleByYou</span>,
                  an AI-powered platform for creating personalized children's
                  books that actually has paying customers. I've also worked on
                  real-time communication platforms and system architecture
                  simulators.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Beyond Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm probably exploring new frameworks,
                reading tech blogs, or working on side projects that push me
                outside my comfort zone.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Tech Stack & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 font-mono">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Python",
              "FastAPI",
              "Node.js",
              "PostgreSQL",
              "Docker",
              "CI/CD",
              "AWS",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
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
