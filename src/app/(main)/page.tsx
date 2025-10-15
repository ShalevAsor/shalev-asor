import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <div className="relative h-full">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background pointer-events-none" />

      {/* Content */}
      {/* <div className="relative h-full z-10 container mx-auto flex justify-center items-center px-4 py-16">
        <Hero />
      </div> */}
      {/* Hero Section - Full height, centered */}
      <section className="relative z-10 h-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <Hero />
        </div>
      </section>
    </div>
  );
}
