"use client";

import Image from "next/image";
import { useState, ReactNode } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

// ============================================
// Callout Component - For highlighting information
// ============================================
interface CalloutProps {
  type?: "info" | "success" | "warning" | "tip";
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/10 border-blue-500/50",
      icon: <FaInfoCircle className="h-5 w-5 text-blue-500" />,
      titleColor: "text-blue-500",
    },
    success: {
      bg: "bg-green-500/10 border-green-500/50",
      icon: <FaCheckCircle className="h-5 w-5 text-green-500" />,
      titleColor: "text-green-500",
    },
    warning: {
      bg: "bg-yellow-500/10 border-yellow-500/50",
      icon: <FaExclamationTriangle className="h-5 w-5 text-yellow-500" />,
      titleColor: "text-yellow-500",
    },
    tip: {
      bg: "bg-purple-500/10 border-purple-500/50",
      icon: <FaLightbulb className="h-5 w-5 text-purple-500" />,
      titleColor: "text-purple-500",
    },
  };

  const style = styles[type];

  return (
    <div className={`border rounded-lg p-4 my-6 ${style.bg}`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <div className={`font-semibold mb-2 ${style.titleColor}`}>
              {title}
            </div>
          )}
          <div className="text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Collapse Component - Collapsible sections
// ============================================
interface CollapseProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function Collapse({
  title,
  defaultOpen = false,
  children,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-lg overflow-hidden my-6 bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {isOpen ? (
          <FaChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <FaChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 animate-fadeIn">{children}</div>
      )}
    </div>
  );
}

// ============================================
// TechStack Component - Technology lists
// ============================================
interface TechStackProps {
  title?: string;
  items: string[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="mb-6">
      {title && (
        <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          {title}
        </h4>
      )}
      <ul className="space-y-2 ml-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-muted-foreground flex items-start gap-3"
          >
            <span className="text-primary mt-1 font-bold">→</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================
// Challenge Component - Problem/Solution cards
// ============================================
interface ChallengeProps {
  title: string;
  problem: string;
  solution: string;
  result?: string;
}

export function Challenge({
  title,
  problem,
  solution,
  result,
}: ChallengeProps) {
  return (
    <div className="mb-6 p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-all duration-300">
      <h4 className="text-lg font-semibold mb-4 text-foreground">{title}</h4>

      <div className="space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded-full mb-2">
            Problem
          </span>
          <p className="text-muted-foreground leading-relaxed">{problem}</p>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
            Solution
          </span>
          <p className="text-muted-foreground leading-relaxed">{solution}</p>
        </div>

        {result && (
          <div>
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded-full mb-2">
              Result
            </span>
            <p className="text-muted-foreground leading-relaxed font-medium">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Step Component - Step-by-step processes
// ============================================
interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="mb-6 flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h4 className="text-lg font-semibold mb-2 text-foreground">{title}</h4>
        <div className="text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ============================================
// Feature Grid - Grid of features/items
// ============================================
interface FeatureGridProps {
  children: ReactNode;
}

export function FeatureGrid({ children }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">{children}</div>
  );
}

interface FeatureCardProps {
  title: string;
  children: ReactNode;
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors">
      <h4 className="font-semibold mb-2 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
}

// ============================================
// Stats Component - Key metrics display
// ============================================
interface StatsProps {
  children: ReactNode;
}

export function Stats({ children }: StatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {children}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({ value, label, trend }: StatCardProps) {
  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-muted-foreground",
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <div
        className={`text-3xl font-bold mb-1 ${
          trend ? trendColors[trend] : "text-primary"
        }`}
      >
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

// ============================================
// Quote Component - Customer testimonials
// ============================================
interface QuoteProps {
  children: ReactNode;
  author: string;
}

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r-lg pr-6">
      <p className="mb-2">{children}</p>
      <footer className="text-sm font-semibold not-italic text-foreground">
        — {author}
      </footer>
    </blockquote>
  );
}

// ============================================
// Tabs Component - Tabbed content sections
// ============================================
interface TabsProps {
  defaultTab?: number;
  children: ReactNode;
}

interface TabItemProps {
  label: string;
  children: ReactNode;
}

export function Tabs({ defaultTab = 0, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Convert children to array and filter out non-TabItem components
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className="my-6 border border-border rounded-lg overflow-hidden bg-card">
      {/* Tab Headers */}
      <div className="flex border-b border-border bg-muted/30">
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === index
                ? "text-primary bg-card"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {tab.props.label}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">{tabs[activeTab]}</div>
    </div>
  );
}

export function TabItem({ children }: TabItemProps) {
  return <div>{children}</div>;
}

// ============================================
// FileTree Component - Display file/folder structure
// ============================================
interface FileTreeProps {
  children: string;
}

export function FileTree({ children }: FileTreeProps) {
  // Parse the text content into a tree structure
  const lines = children.trim().split("\n");

  return (
    <div className="my-6 border border-border rounded-lg p-6 bg-card font-mono text-sm overflow-x-auto">
      <pre className="text-muted-foreground">
        {lines.map((line, index) => {
          // Check if it's a folder (ends with /)
          const isFolder = line.trim().endsWith("/");
          // Check if it's a file with extension
          const hasExtension = /\.\w+$/.test(line.trim());

          return (
            <div key={index} className="leading-relaxed">
              <span className={isFolder ? "text-primary font-semibold" : ""}>
                {line}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}

// ============================================
// ProcessFlow Component - Sequential process visualization
// ============================================
interface ProcessFlowProps {
  steps: string[];
  variant?: "vertical" | "compact";
}

export function ProcessFlow({ steps, variant = "vertical" }: ProcessFlowProps) {
  return (
    <div className="my-6">
      {variant === "vertical" ? (
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Step */}
              <div className="flex items-start gap-4 py-3">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center gap-4 h-6">
                  <div className="flex-shrink-0 flex flex-col items-center w-8">
                    <div className="h-full w-0.5 bg-border"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        // Compact variant - text only with arrows
        <div className="flex flex-col gap-2 p-6 border border-border rounded-lg bg-card">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center gap-3">
                <span className="text-primary font-mono">→</span>
                <span className="text-muted-foreground text-sm">{step}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// FeatureList Component - Comprehensive feature descriptions
// ============================================
interface FeatureListProps {
  children: ReactNode;
}

interface FeatureProps {
  icon?: string;
  title: string;
  children: ReactNode;
}

export function FeatureList({ children }: FeatureListProps) {
  return <div className="my-6 space-y-4">{children}</div>;
}

export function Feature({ icon, title, children }: FeatureProps) {
  return (
    <div className="border border-border rounded-lg p-5 bg-card hover:border-primary/50 transition-colors">
      <div className="flex items-start gap-4">
        {icon && <div className="flex-shrink-0 text-3xl">{icon}</div>}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2 text-foreground">
            {title}
          </h4>
          <div className="text-muted-foreground leading-relaxed text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// UserFlow Component - Visual flow with arrows
// ============================================
interface UserFlowProps {
  steps: string[];
  title?: string;
}

export function UserFlow({ steps, title }: UserFlowProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="text-lg font-semibold mb-6 text-foreground">{title}</h4>
      )}
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Box */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <p className="text-sm text-foreground leading-relaxed">
                  {step}
                </p>
              </div>
            </div>

            {/* Arrow (except for last step) */}
            {index < steps.length - 1 && (
              <div className="flex items-center ml-5 my-1 h-8">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    width="20"
                    height="32"
                    viewBox="0 0 20 32"
                    fill="none"
                    className="text-primary/60"
                  >
                    <path
                      d="M10 0 L10 24 M10 24 L6 20 M10 24 L14 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// Figure Component - Single image with caption
// ============================================
interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: "sm" | "md" | "lg" | "full";
}

export function Figure({ src, alt, caption, width = "full" }: FigureProps) {
  const [isOpen, setIsOpen] = useState(false);

  const widthClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    full: "w-full",
  };

  return (
    <>
      <figure className={`my-8 ${widthClasses[width]} mx-auto`}>
        <div
          className="rounded-lg overflow-hidden border border-border shadow-lg bg-muted hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img src={src} alt={alt} className="w-full h-auto" />
        </div>
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold"
          >
            ×
          </button>
          <div className="max-w-7xl max-h-full overflow-auto">
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            />
            {caption && (
              <p className="text-white text-center mt-4 text-sm">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ============================================
// ImageGallery Component - Grid of images
// ============================================
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: 2 | 3 | 4;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns]} gap-6 my-8`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="space-y-2 cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <div className="rounded-lg overflow-hidden border border-border shadow-md bg-muted hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
            </div>
            {image.caption && (
              <p className="text-xs text-muted-foreground text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold"
          >
            ×
          </button>
          <div className="max-w-7xl max-h-full overflow-auto">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            />
            {images[selectedImage].caption && (
              <p className="text-white text-center mt-4 text-sm">
                {images[selectedImage].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ============================================
// ImageComparison Component - Before/After
// ============================================
interface ImageComparisonProps {
  before: {
    src: string;
    alt: string;
    label?: string;
  };
  after: {
    src: string;
    alt: string;
    label?: string;
  };
  caption?: string;
}

export function ImageComparison({
  before,
  after,
  caption,
}: ImageComparisonProps) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before Image */}
        <div className="space-y-2">
          <div className="relative rounded-lg overflow-hidden border border-border shadow-md bg-muted">
            <img src={before.src} alt={before.alt} className="w-full h-auto" />
            {before.label && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-destructive/90 text-destructive-foreground text-xs font-semibold rounded">
                {before.label}
              </div>
            )}
          </div>
        </div>

        {/* After Image */}
        <div className="space-y-2">
          <div className="relative rounded-lg overflow-hidden border border-border shadow-md bg-muted">
            <img src={after.src} alt={after.alt} className="w-full h-auto" />
            {after.label && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded">
                {after.label}
              </div>
            )}
          </div>
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-center text-sm text-muted-foreground italic">
          {caption}
        </p>
      )}
    </div>
  );
}
