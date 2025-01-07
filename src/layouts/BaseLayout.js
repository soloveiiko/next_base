import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import { Footer, Header } from "@/components";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="flex-grow">
          <div className="relative mx-auto flex flex-col">{children}</div>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}
