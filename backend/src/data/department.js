import { client } from "../../database/db_config.js";

async function addDepartment(name) {
  const stmnt = "INSERT INTO department (name) VALUES($1) RETURNING id";

  try {
    const info = await client.query(stmnt, [name.toUpperCase()]);

    return info.rows[0].id;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getDepartmentByName(department) {
  const departmentName = department.toUpperCase();
  const stmnt = "SELECT * FROM department WHERE name =$1";

  try {
    const info = await client.query(stmnt, [departmentName]);
    return info.rows[0];
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllDepartments() {
  const stmnt = "SELECT * FROM department";

  try {
    const info = await client.query(stmnt);

    return info.rows;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function deleteDepartmentById(id) {
  const stmnt = "DELETE FROM department WHERE id = $1 RETURNING id";

  try {
    const info = await client.query(stmnt, [id]);

    return info.rows[0].id;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

export {
  getDepartmentByName,
  addDepartment,
  getAllDepartments,
  deleteDepartmentById,
};
