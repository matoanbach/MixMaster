import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function HomeLayout() {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;