import { expenseService } from "@/services/expense-service";
import { setupMocks } from "@/mock/mock-adapter";

import ExpensesPerDay from "@/components/ExpensesPerDay/index";

export default async function Day() {
  setupMocks();
  const response = await expenseService.getDay();
  const total = Object.values(response.data).reduce((acc, value) => {
    return typeof value === "number" ? acc + value : acc + value.amount;
  }, 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Список расходов за день</h2>
        <ExpensesPerDay expenses={response.data} />
        <div className="font-light text-lg text-right self-end pr-4">Всего: {total.toLocaleString('ru-RU')}</div>
      </main>
    </div>
  );
}
