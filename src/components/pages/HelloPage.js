import Image from "next/image";
import { ImgContainer, PageContainer } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function HelloPage() {
  const t = useTranslations("hello-page");
  return (
    <PageContainer className="gap-5 p-4">
      <ImgContainer>
        <Image
          src="/images/hello.gif"
          alt="Say Hello!"
          width="671"
          height="500"
        />
      </ImgContainer>
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <h2 className="text-lg font-semibold">{t("subtitle")}</h2>
        <p className="text-center">{t("description")}</p>
      </div>
    </PageContainer>
  );
}
