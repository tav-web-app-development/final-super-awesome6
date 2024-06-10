import pg from "pg";
const { Client } = pg;

const client = new Client({
  // eslint-disable-next-line no-undef
  connectionString: process.env.DATABASE_URL,
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
