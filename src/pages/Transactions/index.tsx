import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";

interface Transaction {
    id: number;
    type: "income" | "outcome";
    description: string;
    category: string;
    price: number;
    createdAt: string;
}

export function Transactions() {
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
        <div>
            <Header />

            <Summary />

            <S.TransactionsContainer>
                <SearchForm />

                <S.TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.description}</td>
                                <td>
                                    <S.PriceHighlight variant={transaction.type}>
                                        {"R$" + (transaction.price / 100).toFixed(2)}
                                    </S.PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>
    );
}
