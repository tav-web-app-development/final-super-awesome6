import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [admins, setAdmins] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    allAdmins();
    allEmployees();
  }, []);

  function allAdmins() {
    fetch("http://localhost:3000/admin/all")
      .then((res) => res.json())
      .then((data) => setAdmins(data.data));
  }

  function allEmployees() {
    fetch("http://localhost:3000/employee/all")
      .then((res) => res.json())
      .then((data) => setEmployee(data.data));
  }

  function handleDelete(id) {
    fetch("http://localhost:3000/admin/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admins.find((a) => a.id === id)),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          window.location.reload();
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="ms-3 mt-5">
      <Link
        to="/dashboard/addadmin"
        className="btn btn-outline-light border
            border-primary-subtle text-primary"
      >
        Add Admin
      </Link>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admins</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{admins.length}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employees</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employee.length}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Edit</button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(a.id)}
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

export default Home;
