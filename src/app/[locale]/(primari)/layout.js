import { BaseLayout } from "@/layouts";

export const metadata = {
  title: "",
  description: "",
};

export default function Layout({ children }) {
  return <BaseLayout>{children}</BaseLayout>;
}
