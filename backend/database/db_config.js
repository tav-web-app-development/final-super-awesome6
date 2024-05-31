/* eslint-disable no-undef */
import Database from "better-sqlite3";
const db = Database(process.env.DB_SOURCE, {});

export default db;
