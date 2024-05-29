import db from "../../database/db_config.js";

async function createAdmin(email, password) {
  const stmnt = db.prepare("INSERT INTO admin (email,password) VALUES(?, ?)");

  try {
    const info = await stmnt.run([email, password]);

    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function doAdminLogin(email, password) {
  const stmnt = db.prepare(
    "SELECT * FROM admin WHERE email = ? AND password =?"
  );

  try {
    const info = await stmnt.get([email, password]);
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function getAllAdmins() {
  const stmnt = db.prepare("SELECT * FROM admin ");

  try {
    const info = stmnt.all();
    return info;
  } catch (err) {
    console.error("Error:", err.message);

    return undefined;
  }
}

async function deleteAdminByCredentials(email, password) {
  const stmnt = db.prepare("DELETE FROM admin WHERE email=? AND PASSWORD=?");
  try {
    const info = stmnt.run(email, password);

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

export { createAdmin, doAdminLogin, getAllAdmins, deleteAdminByCredentials };
