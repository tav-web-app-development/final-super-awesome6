import { Router } from "express";
const router = Router();
import {
  createAdmin,
  doAdminLogin,
  getAllAdmins,
  deleteAdminByCredentials,
} from "../data/admin.js";

// Add a new admin
router.post("/admin/create", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email && password) {
    const createdAdmin = await createAdmin(email, password);

    if (createdAdmin) {
      res.json({
        data: createdAdmin,
        Status: true,
        message: "You have successfully created an account",
      });
    } else {
      res
        .status(409)
        .json({ Status: false, message: "You may already have an account" });
    }
  } else {
    res.status(400).json({ message: "Please enter both email and password" });
  }
});

// Do Login  Admin by email and password
router.post("/admin/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    const admin = await doAdminLogin(email, password);

    if (admin) {
      res.json({ loginStatus: true, data: admin });
    } else {
      res
        .status(404)
        .json({ loginStatus: false, message: "Admin data not found" });
    }
  } else {
    res.status(400).json({
      loginStatus: false,
      message: "Please enter both email and password",
    });
  }
});

// Get All Admins
router.get("/admin/all", async (req, res) => {
  const allAdmins = await getAllAdmins();

  if (allAdmins) {
    res.json({ Status: true, data: allAdmins });
  } else {
    res
      .status(500)
      .json({ Status: false, message: "Error in getting all admins" });
  }
});

// Delete admin by email and password
router.delete("/admin/delete", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    const deletedAdmin = await deleteAdminByCredentials(email, password);

    if (deletedAdmin) {
      res.json({ Status: true, data: deletedAdmin });
    } else {
      res.status(500).json({ Status: false, message: "Error deleting admin" });
    }
  } else {
    res.status(400).json({ message: "Invalid email and/or password" });
  }
});

export default router;
