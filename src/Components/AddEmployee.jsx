/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    dept_id: "",
  });

  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/department/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          setDepartment(data.data);
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/employee/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          // alert("Employee Succesfully added");
          navigate("/dashboard/employee");
        } else {
          alert("Employee not added");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter Name "
              className="form-control rounded"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              id="inputEmail"
              placeholder="Enter Email "
              autoComplete="off"
              className="form-control rounded"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              id="inputPassword"
              placeholder="Enter Password "
              className="form-control rounded"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              <strong>Salary:</strong>
            </label>
            <input
              type="text"
              id="inputSalary"
              placeholder="Enter Salary "
              className="form-control rounded"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDeptID" className="form-label ">
              <strong>Department :</strong>
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, dept_id: e.target.value })
              }
            >
              {department.map((d) => {
                return (
                  <option value={d.id} key={d.id}>
                    {d.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-outline-success w-100">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
