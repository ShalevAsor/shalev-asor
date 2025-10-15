import About from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section - Full height, centered, grid background */}
      <Hero />
      {/* About Me Section , clean background*/}
      <About />
    </div>
  );
}
