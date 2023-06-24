import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/axios";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    type: "income" | "outcome";
    description: string;
    category: string;
    price: number;
    createdAt: string;
}

interface createTransactionProp {
    description: string;
    price: number;
    category: string;
    type: "income" | "outcome";
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (formData: createTransactionProp) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function createTransaction(formData: createTransactionProp) {
        const { data } = await api.post("/transactions", { ...formData, createdAt: new Date() });

        setTransactions((prev) => [data, ...prev]);
    }

    async function fetchTransactions(query?: string) {
        const { data } = await api.get("/transactions", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: query,
            },
        });

        setTransactions(data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider
            value={{ transactions, fetchTransactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
