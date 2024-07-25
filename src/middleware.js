import { locales } from "@/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
});

export const config = {
  matcher: "/((?!api|_next/static|_next/image|images/|fonts/|favicon/).*)",
};
