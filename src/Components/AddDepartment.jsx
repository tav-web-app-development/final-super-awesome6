import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    name: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/department/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(department),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          navigate("/dashboard/department");
        } else {
          alert("Department not added");
        }
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-75 ">
      <div className="p-3 rounded w-25 border ">
        <h2>Add Department</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="department">
              <strong>Department:</strong>
            </label>
            <input
              type="text"
              name="department"
              placeholder="Enter Department"
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) => setDepartment({ name: e.target.value })}
            />
          </div>
          <button className="btn btn-outline-success m w-100 rounded-0 mb-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddDepartment;
