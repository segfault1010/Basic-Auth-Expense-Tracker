import { Router } from "express";
import {
  getExpenses,
  createExpense,
  deleteExpense,
} from "../controllers/expenseController";
import { auth } from "../middleware/auth";

const router = Router();

router.use(auth);
router.get("/", getExpenses);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);

export default router;
