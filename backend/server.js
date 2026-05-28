import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* CONTACT API */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, website, message } = req.body;

    const newMessage = await prisma.contact.create({
      data: {
        name,
        email,
        website,
        message,
      },
    });

    res.status(201).json({
      success: true,
      data: newMessage,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});