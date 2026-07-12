import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';
import ChatBot from '@/components/chatbot/ChatBot';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "oblue — AI Automation & Digital Growth Agency",
  description: "We help businesses get more customers through AI, automation, high-performance websites, SEO, and lead generation.",
  keywords: "AI Automation, Digital Growth, Lead Generation, WhatsApp Automation, SEO, Website Development, oblue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        {/* Persistent Premium Elements */}
        <CustomCursor />
        <Navbar />
        
        {/* Main Content Layout */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        
        <Footer />
        <FloatingWA />
        <ChatBot />
      </body>
    </html>
  );
}
