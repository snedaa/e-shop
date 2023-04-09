import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
