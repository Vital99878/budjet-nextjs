import {MonthExpensesData, CompositeExpense} from "@/types/expenses";

export default function getTotalMonth(data: MonthExpensesData): Record<string, number | CompositeExpense> {
  const total: Record<string, number | CompositeExpense> = {};

  data.forEach(dayExpenses => {
    for (const key in dayExpenses) {
      const value = dayExpenses[key];

      if (typeof value === 'number') {
        // Если значение является числом, добавляем к общему итогу
        // @ts-expect-error
        total[key] = (total[key] || 0) + value;
      } else if (typeof value === 'object' && value !== null) {
        // Если значение является объектом IncludingExpenses
        if (!total[key]) {
          total[key] = {
            amount: 0,
            including: {}
          } as CompositeExpense;
        }
        const currentExpense = total[key] as CompositeExpense;

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
