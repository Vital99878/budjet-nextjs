"use client";
import { ExpensesOfDay } from "@/types/expenses";
import CompositeExpense from "./components/CompositeExpense";
import Expense from "@/components/ExpensesPerDay/components/Expense/Expense";

type Props = {
  expenses: ExpensesOfDay;
};

export default function ExpensesPerDay({ expenses }: Props) {
  return (
    <div className="space-y-6">
      {Object.keys(expenses).map((key) => {
        const value = expenses[key];
        return (
          <div key={key}>
            {typeof value === "number" ? (
              <Expense name={key} value={value} />
            ) : (
              <CompositeExpense name={key} includingExpenses={value} />
            )}
          </div>
        );
      })}
    </div>
  );
}
