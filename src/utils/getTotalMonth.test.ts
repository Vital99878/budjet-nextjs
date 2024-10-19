import getTotalMonth from "@/utils/getTotalMonth";
import { describe, it, expect } from "@jest/globals";
import {ExpensesOfDay} from "@/types/expenses";

describe("getTotalMonth", () => {


  it("should get correct month total", () => {
    const expense: ExpensesOfDay = {
      wear: 5000,
      food: {
        amount: 75,
        including: {
          coffee: 25,
          meat: 25,
          milk: 25,
        },
      },
    };
    const expected = {
      wear: 10000,
      food: {
        amount: 150,
        including: {
          coffee: 50,
          meat: 50,
          milk: 50,
        },
      },
    };
    const result = getTotalMonth([expense, expense]);
    expect(result).toEqual(expected);
  });

  it("should get correct month total 2", () => {
    const expense: ExpensesOfDay = {
      wear: 5000,
      food: {
        amount: 75,
        including: {
          coffee: 25,
          milk: 25,
          meat: 25,
        },
      },
    };
    const expense_2: ExpensesOfDay = {
      wear: 5000,
      socks: 120,
      food: {
        amount: 50,
        including: {
          coffee: 25,
          milk: 25,
        },
      },
    };
    const expected = {
      wear: 10000,
      socks: 120,
      food: {
        amount: 125,
        including: {
          coffee: 50,
          milk: 50,
          meat: 25,
        },
      },
    };
    const result = getTotalMonth([expense, expense_2]);
    expect(result).toEqual(expected);
  });
});
