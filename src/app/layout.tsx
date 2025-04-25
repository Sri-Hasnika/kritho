import "@/styles/globals.css";
import type { Metadata } from "next";
import Provider from "@/providers/Provider";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krithoathon",
  description: "temp description",
  icons: {
    icon: "/images/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider
      refetchInterval={5 * 60}// 5 minutes
      session={session}>
      <html lang="en" className="bg-slate-950 dark:bg-slate-950">
        <body className={`${inter.className} relative min-h-screen text-slate-200`}>
          {/* Content container */}
          <div className="relative z-10">
            <Provider>{children}</Provider>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}