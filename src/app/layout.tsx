import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getTheme } from "@/actions/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shalevasor.dev"),
  title: {
    default: "Shalev Asor - Full-Stack Developer",
    template: "%s | Shalev Asor",
  },
  description:
    "Full-stack developer specializing in React, TypeScript, Next.js, and Python. Building production-ready applications with modern web technologies.",
  keywords: [
    "Shalev Asor",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Python",
    "FastAPI",
    "Web Development",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Shalev Asor", url: "https://shalevasor.dev" }],
  creator: "Shalev Asor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shalevasor.dev",
    title: "Shalev Asor - Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, TypeScript, Next.js, and Python. Building production-ready applications with modern web technologies.",
    siteName: "Shalev Asor Portfolio",
    images: [
      {
        url: "/images/profile/shalev.jpg",
        width: 1200,
        height: 630,
        alt: "Shalev Asor - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalev Asor - Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, TypeScript, Next.js, and Python.",
    images: ["/images/profile/shalev.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Choose weights you need
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en" className={theme === "light" ? "light" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
