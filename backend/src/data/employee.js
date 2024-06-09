import { client } from "../../database/db_config.js";

async function addEmployee(employee) {
  const stmnt =
    "INSERT INTO employee (name, email, password, salary, dept_id) VALUES ($1,$2,$3,$4,$5) RETURNING id";
  try {
    const info = await client.query(stmnt, [employee]);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getEmployeeById(id) {
  const stmnt = "SELECT * FROM employee WHERE id=$1";

  try {
    const info = await client.query(stmnt, [id]);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllEmployees() {
  const stmnt = "SELECT * FROM employee ";
  try {
    const info = await client.query(stmnt);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getEmployeesByDepartmentId(dept_id) {
  const stmnt = "SELECT * FROM employee WHERE dept_id=$1";
  try {
    const info = await client.query(stmnt, dept_id);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function deleteEmployeeById(id) {
  const stmnt = "DELETE FROM employee WHERE id=$1 RETURNING id";

  try {
    const info = await client.query(stmnt, id);

    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function updateEmployeeById(values) {
  const stmnt =
    "UPDATE employee set name = $1 , email = $2, salary = $3, dept_id =$4  Where id = $5 RETURNING id";
  try {
    const info = await client.query(stmnt, [values]);

    return info;
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
