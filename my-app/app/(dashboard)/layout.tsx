import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Dashboard Navbar</h1>
      {children}
    </div>
  ); // this will give all other pages that we are using under dashboard
};

export default layout;
