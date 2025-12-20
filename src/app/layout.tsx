import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desenrola.AI - Soluções de IA sob medida",
  description: "Desenvolvemos softwares inteligentes e agentes de IA personalizados para otimizar processos e automatizar tarefas.",
  icons: {
    icon: '/images/Logo_DesenrolaAi.svg',
    shortcut: '/images/Logo_DesenrolaAi.svg',
    apple: '/images/Logo_DesenrolaAi.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
