import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
    category_id: "",
  });
  //   const [employee, setEmployee] = useState([
  //     { name: "a", email: "b@example.com", salary: 260000, id: 0 },
  //   ]);
  const [department, setDepartment] = useState([{ name: "IT", id: 0 }]);
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

    fetch("http://localhost:3000/employee/" + id)
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
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/employee/${id}/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          navigate("/dashboard/employee");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        {/* <h1>{id}</h1> */}
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
              value={employee.name}
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
              value={employee.email}
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
              value={employee.password}
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
              value={employee.salary}
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
