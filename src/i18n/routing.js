import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ua", "en"],
  defaultLocale: "ua",
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  useLocale,
} = createNavigation(routing);
