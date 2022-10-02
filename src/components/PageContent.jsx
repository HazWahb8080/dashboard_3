import React from "react";
import Header from "./header/Header";

function PageContent({ children }) {
  return (
    <div className="col-span-10 w-full items-start justify-start flex min-h-screen flex-col">
      <Header />
      {children}
    </div>
  );
}

export default PageContent;
