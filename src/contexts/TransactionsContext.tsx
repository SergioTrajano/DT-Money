import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    type: "income" | "outcome";
    description: string;
    category: string;
    price: number;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextType {
    transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/transactions`);
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    );
}
