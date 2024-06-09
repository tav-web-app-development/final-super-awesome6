import pg from "pg";
const { Client } = pg;
// import fs from "fs";

const client = new Client({
  connectionString:
    "postgres://malav:ZHAzEU4qD2b0MQPyXgQQ6ekYhSLBy51Y@dpg-cpf4v3tds78s739697s0-a.ohio-postgres.render.com/employee_5xcq",
  ssl: { rejectUnauthorized: false },
});

async function connect() {
  try {
    console.log("started");
    await client.connect();
  } catch (error) {
    console.error("Error executing query:", error.stack);
  }
}

export { connect, client };
