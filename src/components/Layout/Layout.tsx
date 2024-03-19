import React from "react";
import { Nav, Sidebar } from ".";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen">
      <div className="w-72 flex-shrink-0 h-full md:flex md:flex-col md:inset-y-0 z-80 bg-blue-800">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Nav />
        </div>
        <div className="px-4 py-6">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
