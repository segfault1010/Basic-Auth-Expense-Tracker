import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../index";

const expenseSchema = z.object({
  amount: z.number().positive(),
  category: z.string().min(1),
  description: z.string().min(1),
});

export const getExpenses = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const expenses = await prisma.expense.findMany({ where: { userId }, orderBy: { date: "desc" } });
  res.json(expenses);
};

export const createExpense = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { amount, category, description } = expenseSchema.parse(req.body);
    const expense = await prisma.expense.create({
      data: { amount, category, description, userId },
    });
    res.status(201).json(expense);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: "Failed to create expense" });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = (req as any).user.userId;
  await prisma.expense.deleteMany({ where: { id, userId } });
  res.status(204).send();
};
