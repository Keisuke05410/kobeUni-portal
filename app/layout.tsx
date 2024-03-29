import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import {Divider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "SHINDAI HUB",
    description: "Hack Kobe.Uni",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-whitecustum">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
                <meta name="theme-color" content="#348ABF" />
            </head>
            <body className={inter.className}>
                <UserProvider>
                    <div className="h-screen flex flex-col items-center bg-whitecustum">
                        <Header />
                        <Divider />
                        {children}
                    </div>
                </UserProvider>
                <Analytics />
            </body>
        </html>
    );
}
