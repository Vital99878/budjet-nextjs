export type CompositeExpense = { amount: number; including: Expense };
export type Expense = Record<string, number | CompositeExpense>;

export type MonthExpensesData= Array<Expense>
export type YearExpensesData= Array<MonthExpensesData>




