import {api} from "@/services/axios";
import {ExpensesOfDay} from "@/types/expenses";

class ExpenseService {
  async getList() {
    return api.get("/expense-list");
  }
  async getDay(): Promise<ExpensesOfDay> {
    return api.get("/expense");
  }
}
export const expenseService = new ExpenseService
