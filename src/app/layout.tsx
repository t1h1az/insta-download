import { Metadata} from "next";
import { DM_Sans as FontSans } from "next/font/google";
import backgroundImage from "../../public/images/porsches-and-horses.png";
import { Footer } from "@/components/layout";
import Image from 'next/image'


import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import styles from './styles.module.css'
import "./globals.css";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AEY Studios - Instagram Video Downloader",
  description: "Download Instagram Videos with AEY Studios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{backgroundColor: 'black'}} className="light">
      <body
        className={cn(
          fontSans.variable,
          styles.body,
          "overflow-x-hidden bg-background items-left font-sans antialiased h-full flex flex-col shrink-0 md:w-5xl",
        )}
        style={{
          background: `black`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <header className={cn(styles.header, "flex w-full items-center px-4 py-2 sm:justify-center md:justify-between")}>
              <Link href="https://app.aey-studios.com" className="flex md:w-5xl">
              <Image
                          src="/images/aey-logo-white.png"
                          width={200}
                          height={200}
                          alt="AEY Studios Logo"
                          className="md:w-40 w-60 h-auto"
                          /></Link></header>
            <main className={"flex h-full justify-center overflow-y-auto px-2 sm:w-full"}>
              {children}
            </main>
            <Footer></Footer>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
