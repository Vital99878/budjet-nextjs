"use client";
import { CompositeExpense as CompositeExpenseType } from "@/types/expenses";

import { useState } from "react";

type Props = {
  includingExpenses: CompositeExpenseType;
  name: string;
};
type IncludingProps = {
  includingExpenses: CompositeExpenseType;
};

export default function CompositeExpense({ name, includingExpenses }: Props) {
  const Including = ({ includingExpenses }: IncludingProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded((prev) => !prev);
    };

    return (
      <div className="mt-1">
        <h2>
          <button
            id="faqs-title-07"
            type="button"
            className="flex items-center w-full text-left py-2 font-light"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-controls="faqs-text-07"
          >
            <span>В том числе</span>
            <svg
              className="fill-indigo-500 shrink-0 ml-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Стрелка вниз */}
              <path
                d="M5 8l5 5 5-5H5z"
                className={`transition-transform duration-200 ease-out ${expanded ? "hidden" : "block"}`}
              />
              {/* Стрелка вверх */}
              <path
                d="M5 12l5-5 5 5H5z"
                className={`transition-transform duration-200 ease-out ${expanded ? "block" : "hidden"}`}
              />
            </svg>
          </button>
        </h2>
        <div
          id="faqs-text-07"
          role="region"
          aria-labelledby="faqs-title-07"
          className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <ul className="pb-3">
              {Object.keys(includingExpenses.including).map((key) => (
                <li key={key}>
                  {key} - {includingExpenses.including[key].toLocaleString('ru-RU')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="border-gray-200 min-w-64 mb-4 flex flex-col p-4 bg-white shadow rounded-md">
      <div className="flex justify-between items-center">
        <p className="block text-sm font-medium text-gray-700 mb-2">{name}</p>
        <p
          id={name}
          className="text-right block min-w-10 rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        >
          {includingExpenses.amount.toLocaleString('ru-RU')}
        </p>
      </div>
      <Including includingExpenses={includingExpenses} />
    </div>
  );
}
