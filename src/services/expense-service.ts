import {api} from "@/services/axios";

class ExpenseService {
    async getList () {
        return api.get('/expense-list')
    }
}
export const expenseService = new ExpenseService
