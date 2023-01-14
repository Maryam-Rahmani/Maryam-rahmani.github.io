import React from "react";

import Navbar from "../navbar/index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default React.memo(Layout);