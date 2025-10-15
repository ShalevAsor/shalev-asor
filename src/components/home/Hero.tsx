import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypewriterEffect from "./TypewriterEffect";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl w-full">
      {/* Left side - Image */}
      <HeroImage />

      {/* Right side - Text content */}
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Shalev Asor</h1>

        {/* Typing animation */}
        <TypewriterEffect />

        {/* Description */}
        <p className="text-muted-foreground text-xl mb-8 max-w-lg">
          I&apos;m a software developer based in Israel with an interest in web
          development. This website showcases my projects, skills, and
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
  );
}
