export type CompositeExpense = {
  amount: number;
  including: Record<string, number>;
};

export type ExpensesOfDay = Record<string, number | CompositeExpense>;

export type MonthExpensesData = Array<ExpensesOfDay>;
export type YearExpensesData = Array<MonthExpensesData>;
