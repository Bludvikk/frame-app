import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ClientOnly from "./components/ClientOnly";

export const metadata = {
  title: "Sentry",
  description: "Sentry for Turbo",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${font.className} h-full min-h-full`}>
        <div className="flex flex-row justify-start">
        <ClientOnly>
          <Sidebar />
          <div className="flex px-4">
            {/* <Navbar /> */}
          </div>
        </ClientOnly>

        <div className="flex-1 h-full">
          {children}
          </div>


        </div>
        

        
      </body>
    </html>
  );
}
