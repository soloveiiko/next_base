"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ImageWrapper } from "@/components";

export default function Preloader() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-20 overflow-hidden bg-base-overlay">
      <ImageWrapper>
        <Image
          src="/images/loader.svg"
          alt="Loading"
          width={200}
          height={200}
        />
      </ImageWrapper>
    </div>
  );
}
