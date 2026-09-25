import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  // Calculate total income and expense
  const transactions = await prisma.transaction.findMany({
    where: { userId },
    include: { category: true },
  });

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  });

  const netBalance = totalIncome - totalExpense;

  // Group by category for pie chart
  const categorySummary: { [key: string]: { name: string; amount: number; color: string } } = {};

  transactions.forEach((t) => {
    const catName = t.category.name;
    if (!categorySummary[catName]) {
      categorySummary[catName] = {
        name: catName,
        amount: 0,
        color: t.category.color || "#000000",
      };
    }
    categorySummary[catName].amount += t.amount;
  });

  // Recent 5 transactions
  const recentTransactions = transactions
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return NextResponse.json({
    totalIncome,
    totalExpense,
    netBalance,
    categoryChart: Object.values(categorySummary),
    recentTransactions,
  });
}
