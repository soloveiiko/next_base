import "@/assets/styles/globals.css";

import { HelloLayout } from "@/layouts";

export const metadata = {
  title: "Trellify",
  description: "Trello notification app",
};

export default function Layout({ children }) {
  return <HelloLayout>{children}</HelloLayout>;
}
