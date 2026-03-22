import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Nazim Djebloun - Full Stack Software Developer",
  description:
    "Nazim Djebloun - Full Stack Software Developer specializing in web applications with modern technologies like React, Next.js, Node.js, TypeScript, and PostgreSQL",
  keywords: [
    "full stack software developer",
    "web developer",
    "react",
    "nextjs",
    "nodejs",
    "expressjs",
    "typescript",
    "postgresql",
    "portfolio",
  ],
  authors: [{ name: "Nazim Djebloun" }],
  metadataBase: new URL("https://www.nazimdjebloun.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nazim Djebloun - Full Stack Software Developer",
    description:
      "Building modern web applications with React, Next.js, Node.js, and TypeScript. Check out my portfolio showcasing projects, skills, and experience.",
    url: "https://www.nazimdjebloun.com/",
    siteName: "Nazim Djebloun Portfolio",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Nazim Djebloun - Full Stack Software Developer",
        },
      ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazim Djebloun - Full Stack Software Developer",
    description:
      "Building modern web applications with React, Next.js, Node.js, and TypeScript.",
    images: ["/og-image.svg"],
  },
  other: {
    portfolio: "This is the portfolio page of Nazim Djebloun",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nazim Djebloun",
    url: "https://www.nazimdjebloun.com",
    jobTitle: "Full Stack Software Developer",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "SQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
    sameAs: [
      "https://github.com/nazimdjebloun",
      "https://www.linkedin.com/in/nazimdjebloun",
    ],
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
