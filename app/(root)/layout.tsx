import Header from "@/components/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top bg-dark-100 px-5 xs:px-10 md:px-16">
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default layout;
