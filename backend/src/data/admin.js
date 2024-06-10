import { client } from "../../database/db_config.js";

async function createAdmin(email, password) {
  const stmnt =
    "INSERT INTO admin (email,password) VALUES($1, $2) RETURNING id";

  try {
    const info = await client.query(stmnt, [email, password]);

    return info.rows[0].id;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function doAdminLogin(email, password) {
  const stmnt = "SELECT * FROM admin WHERE email = $1 AND password = $2";
  try {
    const info = await client.query(stmnt, [email, password]);

    return info.rows[0];
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllAdmins() {
  const stmnt = "SELECT * FROM admin ";

  try {
    const info = await client.query(stmnt);

    return info.rows;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function deleteAdminByCredentials(email, password) {
  const stmnt = "DELETE FROM admin WHERE email=$1 AND PASSWORD=$2 RETURNING id";

  try {
    const info = await client.query(stmnt, [email, password]);

    return info.rows[0].id;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

export { createAdmin, doAdminLogin, getAllAdmins, deleteAdminByCredentials };
