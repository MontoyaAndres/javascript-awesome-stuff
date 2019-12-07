import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function layout({ children }) {
  return (
    <>
      <style jsx>{`
        .background-color-layout {
          background-color: #f2f4f5;
        }
      `}</style>

      <div className="px-4 md:px-8 lg:px-16 background-color-layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default layout;
