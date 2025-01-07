import "@/assets/styles/globals.css";

import { RootLayout } from "@/layouts";

export const metadata = {
  title: "Trellify",
  description: "Trello notification app",
};

export default function Layout({ children, params }) {
  return <RootLayout params={params}>{children}</RootLayout>;
}
