/* eslint-disable no-unused-vars */
//Imports
import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
import adminRouter from "./routers/admin.js";
import departmentRouter from "./routers/department.js";
import employeeRouter from "./routers/employee.js";

// Create and configure
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//Routes

//Root Router
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Main Page</h1>");
});

app.get("/error", (req, res) => {
  throw new Error("Something has gone terribly wrong...");
});

app.use("/", adminRouter);
app.use("/", departmentRouter);
app.use("/", employeeRouter);

// Error Handling
// Unknown Request handler
app.all("*", (req, res) => {
  res.status(404).json({
    msg: "Something is wrong try again later ",
    reqBody: req.body,
    reqPath: req.path,
    reqQuery: req.query,
    reqMethod: req.method,
    statusCode: res.statusCode,
  });
});

// Internal Error handler
const handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Malfunction");
};

app.use(handleError);

export default app;
