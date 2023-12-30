const express = require("express");
const ticketController = require("../controllers/ticketController");
const router = express.Router();

router.get("/basvuru/:basvuruNo", ticketController.getTicket);
router.post("/basvuru-olustur", ticketController.createTicket);
router.get("/admin/basvuru-listesi", ticketController.getAllTickets);
router.get("/admin/basvuru/:basvuruNo", ticketController.getTicket);
router.put("/admin/basvuru/:basvuruNo", ticketController.respondToTicket);
router.get("/basvuru-sorgula/basvuru/:basvuruNo", ticketController.getTicket);
router.post(
  "http://localhost:3000/basvuru-basarili",
  ticketController.createTicket
);

module.exports = router;
