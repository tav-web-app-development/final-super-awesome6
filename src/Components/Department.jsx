import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Department = () => {
  // eslint-disable-next-line no-unused-vars
  const [department, setDepartment] = useState([]);

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

  function handleDelete(id) {
    fetch(`http://localhost:3000/department/${id}/delete`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Status) {
          setDepartment(department.filter((d) => d.id !== id));
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Department List</h3>
      </div>
      <Link
        to="/dashboard/adddepartment"
        className="btn btn-outline-light border border-primary-subtle text-primary"
      >
        Add Department
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {department.map((d) => (
              <tr key={d.id}>
                <td>
                  {d.id} - {d.name}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <Outlet /> */}
    </div>
  );
};

export default Department;
