// import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary-subtle">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
            <Link
              to="/dashboard"
              className=" d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-black text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">REACT</span>
            </Link>
            <ul className="nav nav-underline flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="nav-link text-black px-0 align-middle"
                >
                  <i className="fs-4 bi bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link text-black px-0 align-middle"
                >
                  <i className="fs-4 bi bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/department"
                  className="nav-link text-black px-0 align-middle"
                >
                  <i className="fs-4 bi bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Department</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link text-black px-0 align-middle"
                >
                  <i className="fs-4 bi bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/" className="nav-link text-black px-0 align-middle">
                  <i className="fs-4 bi bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow-sm">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
