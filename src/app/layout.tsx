import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import { Footer } from "@/components/footer";
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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning style={{ backgroundColor: 'black' }} className="light">
      <GoogleAnalytics gaId="G-F297VRSVT6" />
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
        <NextIntlClientProvider>

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
                  />
                </Link>
                <h2 className="section__headline">Instagram Video Downloader</h2>
              </header>
              <main className={"flex h-full justify-center overflow-y-auto px-2 sm:w-full"}>
                {children}
              </main>
              <Footer></Footer>
            </ReactQueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
