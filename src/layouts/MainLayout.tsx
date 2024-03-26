import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
}> = ({ children, title, description }) => {
  return (
    <>
      <meta name="description" content={description} />
      <title>{title}</title>
      {/* for mobile */}
      <NavBar />
      <div id="page">
        <div id="wrapper"> {children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
