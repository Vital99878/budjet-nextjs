export type SimpleExpense = {
  string: number;
};
export type CompositeExpense = {
  string: IncludingExpenses;
};
export type IncludingExpenses = {
  amount: number;
  including: Record<string, number>;
};

export type ExpensesOfDay = Record<string, number | IncludingExpenses>;

export type MonthExpensesData = Array<ExpensesOfDay>;
export type YearExpensesData = Array<MonthExpensesData>;
