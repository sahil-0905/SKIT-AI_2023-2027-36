import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "dns";
import authRoutes from "./routes/authRoutes.js";
import problemRoutes from "./routes/ProblemRoutes.js";
import cors from "cors";
import executeRoutes from "./routes/executeRoutes.js";

// Set reliable DNS servers for MongoDB Atlas SRV lookup on local machines
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/auth", authRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/execute", executeRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});