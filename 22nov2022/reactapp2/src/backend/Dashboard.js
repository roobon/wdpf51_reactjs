import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header.js";
import Navbar from "../header/Navbar.js";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function Dashboard() {
  return (
    <>
      <h1>Header would be different</h1>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
      <Footer copyright="Copyright (c) all rights reserved 2022" />
    </>
  );
}

export default Dashboard;
