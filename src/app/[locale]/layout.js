import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { RootLayout } from "@/layouts";
import { getMessages, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function Layout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <RootLayout messages={messages} locale={locale}>
      {children}
    </RootLayout>
  );
}
