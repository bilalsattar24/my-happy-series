import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Happy Series | Children's Books",
  description:
    "Islam-inspired children's books by Umaymah Muhammad about salah, self-love, confidence, and happy little hearts.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
