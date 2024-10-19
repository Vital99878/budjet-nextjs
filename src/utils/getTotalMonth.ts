import {MonthExpensesData, IncludingExpenses} from "@/types/expenses";

export default function getTotalMonth(data: MonthExpensesData): Record<string, number | IncludingExpenses> {
  const total: Record<string, number | IncludingExpenses> = {};

  data.forEach(dayExpenses => {
    for (const key in dayExpenses) {
      const value = dayExpenses[key];

      if (typeof value === 'number') {
        // Если значение является числом, добавляем к общему итогу
        // @ts-ignore
        total[key] = (total[key] || 0) + value;
      } else if (typeof value === 'object' && value !== null) {
        // Если значение является объектом IncludingExpenses
        if (!total[key]) {
          total[key] = {
            amount: 0,
            including: {}
          } as IncludingExpenses;
        }
        const currentExpense = total[key] as IncludingExpenses;

        currentExpense.amount += value.amount;

        // Обрабатываем вложенное поле including
        for (const itemKey in value.including) {
          currentExpense.including[itemKey] = (currentExpense.including[itemKey] || 0) + value.including[itemKey];
        }
      }
    }
  });

  return total;
}
