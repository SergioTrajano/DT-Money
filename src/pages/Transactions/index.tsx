import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { useTransactions } from "../../hooks/useTransactions";

import { dateFormatter, priceFormatter } from "../../utils/formatter";

import * as S from "./styles";

export function Transactions() {
    const { transactions } = useTransactions();

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
                                        {transaction.type === "outcome" && "- "}
                                        {priceFormatter.format(transaction.price / 100)}
                                    </S.PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))}
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>
    );
}
