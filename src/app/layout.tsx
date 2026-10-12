import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeFavicon from "@/components/theme-favicon";

export const metadata: Metadata = {
  title: "Ganesh Chandrasekar | AI/ML Engineer",
  description: "AI/ML engineering portfolio spanning machine learning, NLP, retrieval, generative AI, APIs, and user-facing software."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo-dark.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/logo-light.png" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <ThemeProvider>
          <ThemeFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
