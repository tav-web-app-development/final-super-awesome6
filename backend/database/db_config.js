/* eslint-disable no-undef */
import Database from "better-sqlite3";
const db = Database(process.env.REACT_APP_DB_SOURCE, {});

export default db;
