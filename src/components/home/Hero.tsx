"use client";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import TypewriterEffect from "./TypewriterEffect";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import HeroImage from "./HeroImage";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative z-10 h-screen">
      {/* Grid background ONLY for hero */}
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl w-full">
          {/* Left side - Image */}
          <div className="slide-in-left">
            <HeroImage />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col slide-in-right">
            <h1 className=" text-5xl md:text-6xl font-bold mb-2">
              Shalev Asor
            </h1>

            {/* Typing animation */}
            <TypewriterEffect />

            {/* Description */}
            <p className="text-muted-foreground text-xl mb-8 max-w-lg">
              I&apos;m a software developer based in Israel with an interest in
              web development. This website showcases my projects, skills, and
              experiences.
            </p>

            {/* Social buttons and resume */}
            <div className="flex justify-between">
              {/* social icons */}
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/in/shalev-asor"
                  target="_blank"
                  className="w-12 h-12 bg-secondary flex items-center justify-center rounded-md hover:bg-primary transition-colors"
                >
                  <FaLinkedin className="w-10 h-10" />
                </Link>
                <Link
                  href="https://github.com/ShalevAsor"
                  target="_blank"
                  className="w-12 h-12 bg-secondary flex items-center justify-center rounded-md hover:bg-primary transition-colors"
                >
                  <FaGithub className="w-10 h-10" />
                </Link>
                <Link
                  href="mailto:shalevasor@gmail.com"
                  className="w-12 h-12 bg-secondary flex items-center justify-center rounded hover:bg-primary transition-colors"
                >
                  <MdEmail className="w-10 h-10" />
                </Link>
              </div>
              {/* Resume button */}
              <Link
                href="/Shalev_Asor_CV.pdf"
                target="_blank"
                className="flex items-center h-12 px-3 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded transition-colors font-medium"
              >
                <HiDocumentText className="w-10 h-10" />
                Resume
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll down button */}
        <button
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary rounded-md hover:bg-primary/90 transition-colors cursor-pointer text-primary-foreground"
          onClick={scrollToAbout}
        >
          <span className="text-xl">Learn More</span>
          <FaArrowDown className="h-6 w-6 animate-bounce " />
        </button>
      </div>
    </section>
  );
}
