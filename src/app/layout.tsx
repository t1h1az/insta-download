import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import backgroundImage from "../../public/images/porsches-and-horses.png";

import { Navbar, Footer } from "@/components/layout";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import styles from './styles.module.css'
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Video Downloader",
  description: "Download Instagram Videos",
};

const style = {

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
        style={{ 
          background: `url(${backgroundImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
      }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            {/* <main className="main relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4"> */}
            <main className={styles.main}>
              {children}
            </main>
            <footer></footer>
          </ReactQueryProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
