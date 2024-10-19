import LoginForm from "@/components/LoginForm";
import getTotalMonth from "@/utils/getTotalMonth";
import {ExpensesOfDay} from "@/types/expenses";

export default function Home() {
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
    const result = getTotalMonth([expense, expense]);
    console.log('result: ', result)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LoginForm />
      </main>
    </div>
  );
}
