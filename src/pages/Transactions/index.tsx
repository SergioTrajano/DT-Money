import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />

            <Summary />

            <S.TransactionsContainer>
                <SearchForm />

                <S.TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento do site</td>
                            <td>
                                <S.PriceHighlight variant="income">R$ 1.200,00</S.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento do site</td>
                            <td>
                                <S.PriceHighlight variant="income">R$ 1.200,00</S.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Desenvolvimento do site</td>
                            <td>
                                <S.PriceHighlight variant="outcome">- R$ 1.200,00</S.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </S.TransactionsTable>
            </S.TransactionsContainer>
        </div>
    );
}
