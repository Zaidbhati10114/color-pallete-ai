import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Column } from "@/components/ui/column";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import TanstackProvider from "@/providers/TanstackProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const title = "Color Pallets AI";
const description = "Get Color Pallets with AI depending on your prompt";

export const metadata: Metadata = {
  metadataBase: new URL(title, "https://colorpallete.ai"),
  title,
  description,
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("selection:bg-secondary", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="black" enableSystem>
          <Column className="w-full p-4 pb-0 items-center min-h-screen">
            <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col items-center">
              <TanstackProvider>{children}</TanstackProvider>
            </div>
            <Footer />
            <Toaster />
            <Analytics />
          </Column>
        </ThemeProvider>
      </body>
    </html>
  );
}
