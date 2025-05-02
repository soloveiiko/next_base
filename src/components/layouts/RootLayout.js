import "@/assets/styles/index.css";

import Metrics from "@/app/metrics";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "",
  description: "",
  alternates: {
    locales: ["en", "uk"],
    hrefs: ["/en", "/uk"],
  },
};

export default async function RootLayout({ locale, messages, children }) {
  return (
    <html lang={locale}>
      <body className="flex min-h-dvh flex-col justify-between">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Metrics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
