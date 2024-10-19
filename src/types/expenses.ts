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

export function isSimpleExpense(
  test: SimpleExpense | CompositeExpense,
): test is SimpleExpense {
  return typeof test !== "object";
}

// const expense: ExpensesOfDay = {
//   food: 50,
//   remont: {
//     amount: 50,
//     including: {
//       data1: 50,
//       data2: 50,
//     },
//   },
// };
