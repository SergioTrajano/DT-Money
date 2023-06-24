import { useContextSelector } from "use-context-selector";

import { TransactionsContext } from "../../../contexts/TransactionsContext";

interface SummaryProps {
    income: number;
    outcome: number;
    total: number;
}

export function useSummary() {
    const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

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
