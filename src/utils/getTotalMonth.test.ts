import getTotalMonth from "@/utils/getTotalMonth";
import { describe, it, expect } from "@jest/globals";

describe("getTotalMonth", () => {
  const expense = {
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

  it("should get correct month total", () => {
    const result = getTotalMonth([expense, expense]);
    expect(result).toBe(expected);
  });
});
