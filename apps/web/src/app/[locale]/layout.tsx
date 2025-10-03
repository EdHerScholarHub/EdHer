import type { ReactNode } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Archivo, Poppins } from "next/font/google";
import { notFound } from "next/navigation";

import Footer from "../../components/home/footer";
import { routing } from "../../i18n/routing";
import NavBar from "../../shared/components/nav-bar";

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default async function LocalLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={`${poppins.variable} ${archivo.variable}`}>
        <NextIntlClientProvider locale={locale}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
