import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as zod from "zod";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import * as S from "./styles";

const searchFormSchema = zod.object({
    query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
    const fetchTransactions = useContextSelector(
        TransactionsContext,
        (context) => context.fetchTransactions
    );

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query);
    }

    return (
        <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />

            <button
                type="submit"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} /> Buscar
            </button>
        </S.SearchFormContainer>
    );
}
