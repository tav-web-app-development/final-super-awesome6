import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./App.css";
// import "./assets/style.css"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Employee from "./Components/Employee.jsx";
import Department from "./Components/Department.jsx";
import Profile from "./Components/Profile.jsx";
import AddDepartment from "./Components/AddDepartment.jsx";
import AddEmployee from "./Components/AddEmployee.jsx";
import EditEmployee from "./Components/EditEmployee.jsx";
import Start from "./Components/Start.jsx";
import AddAdmin from "./Components/AddAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "addadmin",
            element: <AddAdmin />,
          },
          {
            path: "employee",
            element: <Employee />,
          },
          {
            path: "addemployee",
            element: <AddEmployee />,
          },
          {
            path: "editemployee/:id",
            element: <EditEmployee />,
          },
          {
            path: "department",
            element: <Department />,
          },
          {
            path: "adddepartment",
            element: <AddDepartment />,
          },

          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
