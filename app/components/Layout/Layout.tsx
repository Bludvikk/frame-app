import React, { ReactNode } from "react";
import ClientOnly from "../ClientOnly";
import Navbar from "../Navbar/page";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <ClientOnly>
        <Navbar />
        <div className="bg-primary flex-1 text-black bg-white">
          <div className="pt-20 pb-20 px-20">{children}</div>
        </div>
      </ClientOnly>
    </div>
  );
};

export default Layout;
