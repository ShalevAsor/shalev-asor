import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative flex items-center justify-center
        px-4 py-16 sm:py-20
        overflow-hidden
      "
    >
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Image container */}
      <div className="relative max-w-full">
        {/* Decorative corner borders */}
        <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-primary"></div>
        <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-accent"></div>

        {/* Floating accent squares */}
        <div className="absolute hidden sm:block -top-6 -right-6 w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 backdrop-blur-sm"></div>
        <div className="absolute hidden sm:block -bottom-6 -left-6 w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 backdrop-blur-sm rotate-45"></div>

        {/* Main image */}
        <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[28rem] rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl"></div>

          <Image
            src="/images/profile/shalev.jpg"
            alt="Professional portrait"
            fill
            className="object-cover"
            priority
          />
          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
        </div>

        {/* Tech stack badges */}
        <div
          className="
            absolute -bottom-6 left-1/2 -translate-x-1/2
            flex gap-2 bg-card/80 backdrop-blur-sm
            px-4 py-2 rounded-full border border-border
            text-[10px] sm:text-xs
          "
        >
          <span className="font-mono text-primary">React</span>
          <span className="text-muted-foreground">•</span>
          <span className="font-mono text-accent">Next.js</span>
          <span className="text-muted-foreground">•</span>
          <span className="font-mono text-primary">TypeScript</span>
        </div>
      </div>
    </div>
  );
}
