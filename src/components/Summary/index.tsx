import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";
import { priceFormatter } from "../../utils/formatter";
import * as S from "./styles";

interface SummaryProps {
    income: number;
    outcome: number;
    total: number;
}

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce(
        (acumulator, transaction) => calculateSummary(acumulator, transaction),
        { income: 0, outcome: 0, total: 0 }
    );

    function calculateSummary(acumulator: SummaryProps, transaction: (typeof transactions)[0]) {
        if (transaction.type === "income") {
            acumulator.income += transaction.price;
            acumulator.total += transaction.price;
        }
        if (transaction.type === "outcome") {
            acumulator.outcome += transaction.price;
            acumulator.total -= transaction.price;
        }

        return acumulator;
    }

    return (
        <S.SummaryContainer>
            <S.SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp
                        size={32}
                        color="#00B37E"
                    />
                </header>
                <strong>{priceFormatter.format(summary.income / 100)}</strong>
            </S.SummaryCard>

            <S.SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown
                        size={32}
                        color="#f75a68"
                    />
                </header>
                <strong>{priceFormatter.format(summary.outcome / 100)}</strong>
            </S.SummaryCard>

            <S.SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar
                        size={32}
                        color="#FFFFFF"
                    />
                </header>
                <strong>{priceFormatter.format(summary.total / 100)}</strong>
            </S.SummaryCard>
        </S.SummaryContainer>
    );
}
