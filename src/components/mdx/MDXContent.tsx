"use client";

import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import {
  Callout,
  Collapse,
  TechStack,
  Challenge,
  Step,
  FeatureGrid,
  FeatureCard,
  Stats,
  StatCard,
  Quote,
  Tabs,
  TabItem,
  FileTree,
  ProcessFlow,
  FeatureList,
  Feature,
  Figure,
  ImageGallery,
  ImageComparison,
  UserFlow,
} from "./MDXComponents";

// MDX components mapping
const mdxComponents = {
  // Custom components
  Callout,
  Collapse,
  TechStack,
  Challenge,
  Step,
  FeatureGrid,
  FeatureCard,
  Stats,
  StatCard,
  Quote,
  Tabs,
  TabItem,
  FileTree,
  ProcessFlow,
  FeatureList,
  Feature,
  Figure,
  ImageGallery,
  ImageComparison,
  UserFlow,

  // Override default HTML elements with custom styling
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold mb-4 mt-12" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mb-3 mt-8" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-semibold mb-2 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc list-inside space-y-2 mb-4 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground"
      {...props}
    />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => (
    <a
      className="text-primary hover:underline font-medium transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  code: (props: any) => {
    // Inline code
    if (!props.className) {
      return (
        <code
          className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        />
      );
    }
    // Code block (handled by rehype-pretty-code)
    return <code className="text-foreground" {...props} />;
  },
  pre: (props: any) => (
    <pre
      className="bg-slate-950 dark:bg-slate-900 border border-border rounded-lg p-4 overflow-x-auto my-6 text-slate-50"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="border-border my-8" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border border-border px-4 py-2 bg-muted font-semibold text-left"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-border px-4 py-2 text-muted-foreground"
      {...props}
    />
  ),
  img: (props: any) => (
    <img className="rounded-lg my-6 shadow-md w-full" {...props} />
  ),
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    // Create a function from the MDX code string
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);

  return (
    <div className="mdx-content">
      <Component components={mdxComponents} />
    </div>
  );
}
