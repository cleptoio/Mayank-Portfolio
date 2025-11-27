import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Mapping to the variable expected by tailwind config
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mayank.clepto.io'),
  title: 'Mayank Khanvilkar | AI Automation Consultant',
  description: 'Founder of Clepto.io specializing in n8n workflows, RAG pipelines, and EU AI Act compliance for SMEs.',
  openGraph: {
    title: 'Mayank Khanvilkar - AI Automation Architect',
    description: 'Building compliance-driven automation solutions',
    url: 'https://clepto.io', // Placeholder
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Khanvilkar',
    description: 'AI Automation Consultant @ Clepto.io',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
