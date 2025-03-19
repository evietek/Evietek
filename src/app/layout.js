import { Inter } from "next/font/google";
import "./globals.css"; // Ensure Tailwind is loaded
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://evietek.com'),
  title: 'Evietek',
  description: 'Evietek - Your Digital Innovation Partner',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: '32x32',
        type: 'image/svg',
      },
      {
        url: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg',
      },
    ],
    apple: [
      {
        url: '/favicon.svg',
        sizes: '180x180',
        type: 'image/svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Footer added here */}
      </body>
    </html>
  );
}
