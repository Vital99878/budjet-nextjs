import MockAdapter from "axios-mock-adapter";
import { api } from "@/services/axios";
import { MonthExpensesData } from "@/types/expenses";
import setMock from "@/mock/setMock";
import {getJSON} from "@/mock/getJSON";
import logInfo from "@/utils/logInfo";

const adapter = new MockAdapter(api);

const response = await getJSON<MonthExpensesData>("month-01");

export const setupMocks = () => {
    logInfo('info', 'Mock is set')
    setMock(
        {
            method: "onGet",
            response,
            adapter,
            url: "/expense-list",
            passThrough: false,
        },
        {
            error: new Error(""),
            repeat: "no-error",
        },
    );
};

