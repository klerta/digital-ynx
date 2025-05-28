import React from "react";
import Navbar from "@/app/components/navigation/Navbar";
import Footer from "@/app/components/navigation/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
