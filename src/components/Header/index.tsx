import * as Dialog from "@radix-ui/react-dialog";

import Logo from "../../assets/Logo.svg";

import { NewTransactionModal } from "../NewTransactionModal";

import * as S from "./styles";

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img
                    src={Logo}
                    alt=""
                />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
