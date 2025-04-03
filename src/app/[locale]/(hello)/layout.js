import "@/assets/styles/index.css";

import { HelloLayout } from "@/layouts";

export const metadata = {
  title: "",
  description: "",
};

export default function Layout({ children }) {
  return <HelloLayout>{children}</HelloLayout>;
}
