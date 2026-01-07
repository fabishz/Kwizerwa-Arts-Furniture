import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
    title: "Kwizerwa Arts Gateway",
    description: "Kwizerwa Arts Gateway",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                    <WhatsAppButton />
                </Providers>
            </body>
        </html>
    );
}
