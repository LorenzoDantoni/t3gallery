import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "~/app/_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated following Theo - t3.gg",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
