import { useContext } from 'react'
// import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormater, priceFormater } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  const {transactions} = useContext(TransactionsContext)
  

  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            { transactions.map((transaction) => {
              return (
                <tr key={ transaction.id }>
                  <td width="40%">{ transaction.description }</td>
                  <td>
                    <PriceHighlight type={ transaction.type }>
                      { transaction.type === 'outcome' && '- ' }
                      { priceFormater.format(transaction.price) }
                    </PriceHighlight>
                  </td>
                  <td>{ transaction.category }</td>
                  {/* <td > { transaction.createdAt }</td> */ }
                  <td>
                    { ' ' }
                    { dateFormater.format(new Date(transaction.createdAt)) }
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}
