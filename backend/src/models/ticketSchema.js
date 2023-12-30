const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  tc: String,
  applicationReason: String,
  address: String,
  additionalInfo: String,
  applicationCode: Number,
  status: {
    type: String,
    default: "Cevaplanmadı", //"Bekliyor" // "Çözüldü" // "İptal Edildi"
  },
  adminResponse: { type: String, default: "Cevaplanmadı" },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
