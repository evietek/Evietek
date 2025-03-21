// RootLayout.js - Modified version
'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  
  useEffect(() => {
    // Listen for loading state changes
    const handleLoadingChange = (e) => {
      setIsLoading(e.detail.isLoading);
    };

    window.addEventListener('loadingStateChange', handleLoadingChange);
    
    // If we're not on the home page, immediately show the navbar/footer
    if (pathname !== '/') {
      setIsLoading(false);
      document.documentElement.classList.remove('loading');
    }
    
    return () => window.removeEventListener('loadingStateChange', handleLoadingChange);
  }, [pathname]);

  return (
    <html lang="en" className={isLoading ? "loading" : ""}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
        <style>{`
          .loading header,
          .loading footer {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
          }

          html:not(.loading) header,
          html:not(.loading) footer {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
          }

          body {
            background-color: #030438;
          }

          main {
            min-height: 100vh;
            position: relative;
            z-index: 1;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}