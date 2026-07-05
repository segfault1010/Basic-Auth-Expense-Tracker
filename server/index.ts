import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./src/routes/authRoutes";
import expenseRoutes from "./src/routes/expenseRoutes";

export const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/expenses", expenseRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
