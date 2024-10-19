import { expenseService } from "@/services/expense-service";
import { setupMocks } from "@/mock/mock-adapter";
import { ExpensesOfDay, IncludingExpenses } from "@/types/expenses";

export default async function Day() {
  const ExpenseInput = ({ name, value }: { name: string; value: number }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {name}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        defaultValue={value}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );

  const IncludingExpensesComponent = ({
    includingExpenses,
  }: {
    includingExpenses: IncludingExpenses;
  }) => (
    <div className="pl-4 border-l-2 border-gray-200">
      <ExpenseInput name="Total Amount" value={includingExpenses.amount} />
      <select className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option value="">Select Included Expenses</option>
        {Object.keys(includingExpenses.including).map((key) => (
          <option key={key} value={key}>
            {key} - {includingExpenses.including[key]}
          </option>
        ))}
      </select>
    </div>
  );

  const ExpensesOfDayComponent = ({
    expenses,
  }: {
    expenses: ExpensesOfDay;
  }) => (
    <div className="space-y-6">
      {Object.keys(expenses).map((key) => {
        const value = expenses[key];
        return (
          <div key={key}>
            {typeof value === "number" ? (
              <ExpenseInput name={key} value={value} />
            ) : (
              <IncludingExpensesComponent includingExpenses={value} />
            )}
          </div>
        );
      })}
    </div>
  );

  setupMocks();
  const response = await expenseService.getDay();

  console.log("data: ", response);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>Список расходов за день</div>
        <ExpensesOfDayComponent expenses={response.data} />
      </main>
    </div>
  );
}
