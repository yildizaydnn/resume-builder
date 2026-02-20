import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

// db connection

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Sunucusu  Çalışıyor");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
