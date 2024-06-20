import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [employee, setEmployee] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/admin/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          navigate("/dashboard");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
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
              type="text"
              id="inputPassword"
              placeholder="Enter Password "
              className="form-control rounded"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
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

export default AddAdmin;
