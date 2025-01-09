import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import clsx from "clsx";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/header/header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto App",
  description: "Crypto App",
  icons: {
    icon: "/public/assets/icons/Icon.svg",
    shortcut: "/public/assets/icons/Icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="w-[100%]">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
