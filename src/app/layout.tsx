import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Focal Point",
  description: "Organize suas tarefas de hoje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
