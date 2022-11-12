import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  /**
   * useMemo is used to memorize the value of the function
   * em vez de ficar fazendo conta do zero toda vez q renderizar, só renderiza quando mudar o valor
   */

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transactions])

  return summary
}
