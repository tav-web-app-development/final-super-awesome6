import db from "../../database/db_config.js";

// const db = require("../../database/db_config").default;

async function addEmployee(employee) {
  const stmnt = db.prepare(
    "INSERT INTO employee (name, email, password, salary, dept_id) VALUES (:name, :email, :password, :salary, :dept_id)"
  );
  try {
    const info = stmnt.run(employee);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getEmployeeById(id) {
  const stmnt = db.prepare("SELECT * FROM employee WHERE id=?");

  try {
    const info = stmnt.get(id);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllEmployees() {
  const stmnt = db.prepare("SELECT * FROM employee ");
  try {
    const info = stmnt.all();
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getEmployeesByDepartmentId(dept_id) {
  const stmnt = db.prepare("SELECT * FROM employee WHERE dept_id=?");
  try {
    const info = stmnt.all(dept_id);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function deleteEmployeeById(id) {
  const stmnt = db.prepare("DELETE FROM employee WHERE id=?");

  try {
    const info = stmnt.run(id);

    if (info.changes > 0) {
      return info;
    } else {
      return undefined;
    }
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function updateEmployeeById(values) {
  const stmnt = db.prepare(
    "UPDATE employee set name = :name , email =:email, salary = :salary, dept_id =:dept_id  Where id = :id"
  );
  try {
    const info = stmnt.run(values);
    if (info.changes > 0) {
      return info;
    } else {
      return undefined;
    }
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

export {
  addEmployee,
  getEmployeeById,
  getEmployeesByDepartmentId,
  getAllEmployees,
  deleteEmployeeById,
  updateEmployeeById,
};
