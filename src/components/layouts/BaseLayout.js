import { Suspense } from "react";
import { Footer, Header, Preloader } from "@/components";

export default function BaseLayout({ children }) {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Header />
      </Suspense>
      <main className="grow">
        <div className="relative mx-auto flex flex-col">{children}</div>
      </main>
      <Footer />
    </>
  );
}
