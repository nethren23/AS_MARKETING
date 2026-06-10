import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

const siteUrl = "https://allocate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Allocate Space — A smarter way to operate",
  description:
    "Allocate Space is the operating platform for modern spaces. Track every space, asset and device, and automate access, booking, maintenance and billing in one place. Our new site is on the way.",
  applicationName: "Allocate Space",
  keywords: [
    "Allocate Space",
    "space management",
    "asset management",
    "real estate operations",
    "facility management",
    "proptech",
    "smart buildings",
  ],
  authors: [{ name: "Allocate Space" }],
  openGraph: {
    title: "Allocate Space — A smarter way to operate",
    description:
      "The operating platform for modern spaces. Track every space, asset and device, and automate access, booking, maintenance and billing in one place.",
    url: siteUrl,
    siteName: "Allocate Space",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allocate Space — A smarter way to operate",
    description:
      "The operating platform for modern spaces. Our new site is on the way.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`}
        </Script>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
