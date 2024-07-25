import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/app/[locale]/loading";
import { Footer, Header } from "@/components/common";
import { locales } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className="flex min-h-screen flex-col bg-base-background text-base-typography">
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="flex-grow">{children}</main>
          </Suspense>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
