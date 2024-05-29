import { Router } from "express";
const router = Router();
import {
  addEmployee,
  getEmployeeById,
  getEmployeesByDepartmentId,
  getAllEmployees,
  deleteEmployeeById,
  updateEmployeeById,
} from "../data/employee.js";

import { getDepartmentByName } from "../data/department.js";

// Add a new employee
router.post("/employee/add", async (req, res) => {
  const employee = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    salary: +req.body?.salary,
    dept_id: +req.body?.dept_id,
  };

  if (Object.values(employee).every((value) => value)) {
    const addedEmployee = await addEmployee(employee);

    if (addedEmployee) {
      res.json({
        data: addedEmployee,
        Status: true,
        message: "You have successfully added a new employee",
      });
    } else {
      res
        .status(409)
        .json({ Status: false, message: "Error in adding employee" });
    }
  } else {
    res.status(400).json({ message: "Please enter valid datas" });
  }
});

// Get employees By Department - All employees or all employees in a specific department(Shared Link)

router.get("/employee/all", async (req, res) => {
  const departmentName = req.query.dept_name;

  if (departmentName) {
    const department = await getDepartmentByName(departmentName);

    if (department) {
      const departmentId = department.id;
      const employees = await getEmployeesByDepartmentId(departmentId);

      res.json({
        data: employees,
        Status: true,
        message: "All employees by given department name",
      });
    } else {
      res.status(404).json({
        Status: false,
        message: "Couldn't find Department by given name",
      });
    }
  } else {
    const employees = await getAllEmployees();

    if (employees) {
      res.json({ Status: true, data: employees });
    } else {
      res
        .status(500)
        .json({ Status: false, message: "Cannot get all employees" });
    }
  }
});

// Get employee By ID - Single employee
router.get("/employee/:id", async (req, res) => {
  const employeeId = +req.params.id;

  if (employeeId) {
    const employee = await getEmployeeById(employeeId);

    if (employee) {
      res.json({ Status: true, data: employee });
    } else {
      res
        .status(404)
        .json({ Status: false, message: "Error in getting employee" });
    }
  } else {
    res.status(400).json({ message: "Invalid Employee ID" });
  }
});

router.put("/employee/:id/update", async (req, res) => {
  const values = {
    id: +req.params.id,
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
    dept_id: req.body.dept_id,
  };

  if (values.id) {
    const employee = await updateEmployeeById(values);
    if (employee) {
      res.json({ Status: true, data: employee });
    } else {
      res
        .status(404)
        .json({ Status: false, message: "Error in updating employee" });
    }
  } else {
    res.status(400).json({ message: "Invalid Employee ID" });
  }
});

// Delete employee by ID
router.delete("/employee/:id/delete", async (req, res) => {
  const employeeId = +req.params.id;
  if (employeeId) {
    const deletedEmployee = await deleteEmployeeById(employeeId);
    if (deletedEmployee) {
      res.json({ Status: true, data: deletedEmployee });
    } else {
      res
        .status(500)
        .json({ Status: false, message: "Error deleting employee" });
    }
  } else {
    res.status(400).json({ message: "Invalid Employee ID" });
  }
});

export default router;
