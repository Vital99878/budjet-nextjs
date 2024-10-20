"use client";

import { expenseService } from "@/services/expense-service";
import { setupMocks } from "@/mock/mock-adapter";
import { ExpensesOfDay, IncludingExpenses } from "@/types/expenses";
import { useState } from "react";

export default async function Day() {
  const ExpenseInput = ({ name, value }: { name: string; value: number }) => (
    <div className="mb-4 flex items-center justify-between p-4 bg-white shadow rounded-md">
      <p className="block text-sm font-medium text-gray-700 mb-2">{name}</p>
      <p
        id={name}
        className="text-right block min-w-10 rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
      >
        {value}
      </p>
    </div>
  );

  const IncludingExpensesComponent = ({
    name,
    includingExpenses,
  }: {
    includingExpenses: IncludingExpenses;
    name: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="border-gray-200 min-w-64 mb-4 flex flex-col p-4 bg-white shadow rounded-md">
        <div className="flex justify-between items-center">
          <p className="block text-sm font-medium text-gray-700 mb-2">{name}</p>
          <p
            id={name}
            className="text-right block min-w-10 rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
          >
            {includingExpenses.amount}
          </p>
        </div>
        <div>
          <button className="text-indigo-500" onClick={toggleAccordion}>
            В том числе {isOpen ? "▲" : "▼"}
          </button>
          <div
            className={`overflow-hidden transition-transform duration-1000 ease-in-out ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            {isOpen && (
              <div className="mt-1">
                <ul className="">
                  {Object.keys(includingExpenses.including).map((key) => (
                    <li key={key}>
                      {key} - {includingExpenses.including[key]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

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
              <IncludingExpensesComponent
                name={key}
                includingExpenses={value}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  setupMocks();
  const response = await expenseService.getDay();
  const total = Object.values(response.data).reduce((acc, value) => {
    return typeof value === "number" ? acc + value : acc + value.amount;
  }, 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Список расходов за день</h2>
        <ExpensesOfDayComponent expenses={response.data} />
        <div className="font-bold text-lg mt-4">Общая сумма: {total}</div>
      </main>
    </div>
  );
}
