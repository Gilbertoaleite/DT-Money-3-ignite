import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <>
            <Header />
            <Summary />
            <TransactionContainer>
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento aplicação</td>
                            <td >
                                <PriceHighlight type="income">
                                R$ 15.000,00
                                </PriceHighlight>
                            </td>
                            <td >Venda</td>
                            <td >05/11/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Compra do mês</td>
                            <td>
                                <PriceHighlight type="outcome">
                                -R$ 15.000,00
                                </PriceHighlight>
                            </td>
                            <td >Gasto</td>
                            <td >04/11/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </>
    )
}