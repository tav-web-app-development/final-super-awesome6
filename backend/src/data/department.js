import db from "../../database/db_config.js";

async function addDepartment(name) {
  const stmnt = db.prepare("INSERT INTO department (name) VALUES(?) ");

  try {
    const info = stmnt.run([name.toUpperCase()]);

    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getDepartmentByName(department) {
  const departmentName = department.toUpperCase();

  const stmnt = db.prepare("SELECT * FROM department WHERE name=?");

  try {
    const info = stmnt.get(departmentName);

    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllDepartments() {
  const stmnt = db.prepare("SELECT * FROM department");

  try {
    const info = stmnt.all();
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}
async function deleteDepartmentById(id) {
  const stmnt = db.prepare("DELETE FROM department WHERE id = ?");

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

export {
  getDepartmentByName,
  addDepartment,
  getAllDepartments,
  deleteDepartmentById,
};
