import express from "express";

const ticketRoutes = express.Router();
import { ticketController } from "../controllers/ticketController.js";

ticketRoutes.post("/basvuru-olustur", ticketController.createTicket);

ticketRoutes.get("/basvuru/:basvuruNo", ticketController.getTicket);
ticketRoutes.get("/admin/basvuru-listesi", ticketController.getAllTickets);
ticketRoutes.get("/admin/basvuru/:basvuruNo", ticketController.getTicket);
ticketRoutes.put("/admin/basvuru/:basvuruNo", ticketController.respondToTicket);
ticketRoutes.get(
  "/basvuru-sorgula/basvuru/:basvuruNo",
  ticketController.getTicket
);
ticketRoutes.post(
  "http://localhost:3000/basvuru-basarili",
  ticketController.createTicket
);

export default ticketRoutes;
