import { Nunito } from "next/font/google";
import { PropsWithChildren, use } from "react";
import "./globals.css";

export const metadata = {
  title: "Sentry",
  description: "Sentry for Turbo",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${font.className} h-full min-h-full`}>
          {children}
      </body>
    </html>
  );
}
