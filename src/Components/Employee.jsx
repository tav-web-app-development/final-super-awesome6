import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import React from "react";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employee/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          setEmployee(data.data);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/employee/${id}/delete`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          setEmployee(employee.filter((e) => e.id !== id));
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => console.log(err));
  }
  // .delete

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link
        to="/dashboard/addemployee"
        className="btn btn-outline-light border border-primary-subtle text-primary"
      >
        Add Employee
      </Link>
      <div className="mt-3"></div>
      <Outlet />
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              {/* <th>Department</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/editemployee/` + e.id}
                    className="btn btn-info btn-sm m-2 "
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
