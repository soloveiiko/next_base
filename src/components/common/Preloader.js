import Image from "next/image";
import { ImgContainer } from "@/components/ui";

export default function Preloader() {
  return (
    <div className="bg-bot-overlay absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-20">
      <ImgContainer>
        <Image src="" alt="Loading" width={230} height={230} />
      </ImgContainer>
      <h2 className="text-50">loading...</h2>
    </div>
  );
}
