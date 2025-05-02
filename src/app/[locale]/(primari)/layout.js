import { BaseLayout } from "src/components/layouts";

export const metadata = {
  title: "",
  description: "",
};

export default function Layout({ children }) {
  return <BaseLayout>{children}</BaseLayout>;
}
