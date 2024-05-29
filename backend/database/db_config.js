/* eslint-disable no-undef */
import Database from "better-sqlite3";
const db = Database("./database/employee.db", {}); //{ verbose: console.log });

export default db;
