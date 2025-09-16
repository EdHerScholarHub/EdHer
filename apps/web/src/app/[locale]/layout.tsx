import type { ReactNode } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "../../i18n/routing";

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

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
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
