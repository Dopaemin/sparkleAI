
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar /> 
      <MobileNav />
      <div className="root-Container">
        <div className="wrapper">
            {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
