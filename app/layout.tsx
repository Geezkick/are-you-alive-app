import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Are You Alive? | Mental Wellness Companion",
  description: "Premium mental health tracking and support platform by Brian Nyarienya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white">
        <Navigation />
        <main className="lg:ml-64">
          {children}
          <Footer />
        </main>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(17, 24, 39, 0.9)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </body>
    </html>
  );
}
