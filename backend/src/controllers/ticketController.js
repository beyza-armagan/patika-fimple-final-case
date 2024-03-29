import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import { Ticket } from "../models/ticketSchema.js";
import { Image } from "../models/imageSchema.js";

export const ticketController = {
  createTicket: async (req, res) => {
    try {
      const {
        name,
        surname,
        age,
        tc,
        applicationReason,
        address,
        applicationCode,
        file,
      } = req.body;

      const newTicket = new Ticket({
        name,
        surname,
        age,
        tc,
        applicationReason,
        address,
        applicationCode,
        image: file,
        date: Date.now(),
      });

      await newTicket.save();

      console.log("Application saved successfully");

      // respond with a success message and the ticket details
      res.status(201).json({
        message: "Application created successfully",
        ticket: newTicket,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTicket: async (req, res) => {
    try {
      const { basvuruNo } = req.params;
      console.log(basvuruNo);

      const currentTicket = await Ticket.findOne({
        applicationCode: basvuruNo,
      });

      if (!currentTicket) {
        return res.status(404).send({ error: "Böyle bir başvuru bulunamadı." });
      }

      res.status(200).send(currentTicket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getAllTickets: async (req, res) => {
    try {
      const allTickets = await Ticket.find(); // get all data
      if (!allTickets) {
        return res.status(404).send({ error: "Başvuru bulunamadı." });
      }
      res.status(200).send(allTickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);

      res.status(500).send({ error: "Internal Server Error" });
    }
  },

  respondToTicket: async (req, res) => {
    try {
      const { basvuruNo } = req.params;
      const { adminResponse, status } = req.body;

      const currentTicket = await Ticket.findOneAndUpdate(
        //get data by appliationCode and update
        { applicationCode: basvuruNo },
        { adminResponse, status },
        { new: true }
      );

      if (!currentTicket) {
        return res.status(404).send({ error: "Böyle bir başvuru bulunamadı." });
      }

      res.status(200).send(currentTicket);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },

  deleteTicket: async (req, res) => {
    try {
      const { basvuruNo } = req.params;

      // find ticket by applicationCode and delete it
      const deletedTicket = await Ticket.findOneAndDelete({
        applicationCode: basvuruNo,
      });

      if (!deletedTicket) {
        return res.status(404).send({ error: "Böyle bir başvuru bulunamadı." });
      }

      res.status(200).json({
        message: "Application deleted successfully",
        ticket: deletedTicket,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
