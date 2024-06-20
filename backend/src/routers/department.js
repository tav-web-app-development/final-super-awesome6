import { Router } from "express";
const router = Router();
import {
  addDepartment,
  getDepartmentByName,
  getAllDepartments,
  deleteDepartmentById,
} from "../data/department.js";

// Add a new department
router.post("/department/add", async (req, res) => {
  const name = req.body.name;

  if (name) {
    const addedDepartment = await addDepartment(name);

    if (addedDepartment) {
      res.json({ Status: true, data: addedDepartment });
    } else {
      res
        .status(409)
        .json({ Status: false, message: "Error in adding department" });
    }
  } else {
    res.status(400).json({ message: "Please enter valid data" });
  }
});

//  Get All Departments
router.get("/department/all", async (req, res) => {
  const allDepartments = await getAllDepartments();

  if (allDepartments) {
    res.json({ Status: true, data: allDepartments });
  } else {
    res
      .status(500)
      .json({ Status: false, message: "Error in getting all departments" });
  }
});

//Get a department By name
router.get("/department/:name", async (req, res) => {
  const departmentName = req.params.name;

  if (departmentName) {
    const department = await getDepartmentByName(departmentName);

    if (department) {
      res.json({ Status: true, data: department });
    } else {
      res.status(404).json({ Status: false, message: "Department not found" });
    }
  } else {
    res.status(400).json({ message: "Invalid Department name" });
  }
});

// Delete department
router.delete("/department/:id/delete", async (req, res) => {
  const departmentId = +req.params.id;

  if (departmentId) {
    const deletedDepartment = await deleteDepartmentById(departmentId);

    if (deletedDepartment) {
      res.json({ Status: true, data: deletedDepartment });
    } else {
      res
        .status(500)
        .json({ Status: false, message: "Error deleting department" });
    }
  } else {
    res.status(400).json({ message: "Invalid department ID" });
  }
});

export default router;
