import "@/assets/styles/globals.css";

import { BaseLayout } from "@/layouts";

export const metadata = {
  title: "Trellify",
  description: "Trello notification app",
};

export default function Layout({ children }) {
  return <BaseLayout>{children}</BaseLayout>;
}
