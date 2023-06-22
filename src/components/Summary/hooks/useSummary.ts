import { useTransactions } from "../../../hooks/useTransactions";

interface SummaryProps {
    income: number;
    outcome: number;
    total: number;
}

export function useSummary() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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

    return summary;
}
