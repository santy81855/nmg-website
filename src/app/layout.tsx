import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/features/nav-bar";

const gilroyFont = localFont({
    src: [
        {
            path: "../../public/font/Gilroy-RegularItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-MediumItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-SemiBoldItalic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-ThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-UltraLightItalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../../public/font/Gilroy-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/Gilroy-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/font/Gilroy-Thin.ttf",
            weight: "100",
            style: "regular",
        },
        {
            path: "../../public/font/Gilroy-UltraLight.ttf",
            weight: "200",
            style: "regular",
        },
    ],
    variable: "--font-gilroy",
});

export const metadata: Metadata = {
    title: "NM&G Remodeling",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${gilroyFont.variable} font-sans`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
