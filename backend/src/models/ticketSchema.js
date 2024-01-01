import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  tc: String,
  applicationReason: String,
  address: String,
  additionalInfo: String,
  applicationCode: Number,
  image: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: "Cevaplanmadı", //"Bekliyor" // "Çözüldü" // "İptal Edildi"
  },
  adminResponse: { type: String, default: "Cevaplanmadı" },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Ticket = mongoose.model("Ticket", ticketSchema);
