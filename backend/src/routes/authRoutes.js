import express from "express";
import {
  login_get,
  login_post,
  logout_get,
} from "../controllers/authController.js";

const authRoutes = express.Router();

// authRoutes.get("/admin/basvuru-listesi", login_get);
// authRoutes.post("/admin/basvuru-listesi", login_post);

authRoutes.post("/admin-login", login_post);
authRoutes.get("/admin-logout", logout_get);

export default authRoutes;
