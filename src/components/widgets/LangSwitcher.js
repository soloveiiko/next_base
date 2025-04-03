"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LangSwitcher() {
  const locales = routing.locales;
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLangChange = (selectedLocale) => {
    router.push(pathname, { locale: selectedLocale });
  };

  return (
    <div className="flex gap-2">
      {locales.map((item, index) => (
        <div key={index} className="rounded-full border p-2">
          <button
            className={`${locale === item ? "text-red-600" : ""}`}
            onClick={() => onLangChange(item)}
          >
            {item.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}
