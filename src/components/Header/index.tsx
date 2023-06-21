import Logo from "../../assets/Logo.svg";

import * as S from "./styles";

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img
                    src={Logo}
                    alt=""
                />

                <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
