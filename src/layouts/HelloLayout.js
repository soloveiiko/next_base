import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";

export default function HelloLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-grow items-center">
        <div className="relative mx-auto flex flex-col">{children}</div>
      </main>
    </Suspense>
  );
}
