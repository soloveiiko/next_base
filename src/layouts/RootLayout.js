import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col bg-base-background text-base-typography">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
