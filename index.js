import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoutes from "./src/routes/auth.routes.js";
import { dbConnection } from "./src/config/db.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/auth", AuthRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server OK" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
