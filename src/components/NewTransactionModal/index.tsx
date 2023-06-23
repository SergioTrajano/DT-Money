import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";

import * as S from "./styles";

const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    });

    function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        console.log(data);
    }

    return (
        <Dialog.Portal>
            <S.Overlay />

            <S.Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <S.CloseButton>
                    <X size={24} />
                </S.CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("description")}
                        required
                    />
                    <input
                        type="number"
                        inputMode="numeric"
                        placeholder="Preço"
                        {...register("price", { valueAsNumber: true })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        {...register("category")}
                        required
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <S.TransactionType
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <S.TransactionTypeButton
                                    value="income"
                                    variant="income"
                                >
                                    <ArrowCircleUp size={24} /> Entrada
                                </S.TransactionTypeButton>
                                <S.TransactionTypeButton
                                    value="outcome"
                                    variant="outcome"
                                >
                                    <ArrowCircleDown size={24} /> Saída
                                </S.TransactionTypeButton>
                            </S.TransactionType>
                        )}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Cadastrar
                    </button>
                </form>
            </S.Content>
        </Dialog.Portal>
    );
}
