import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'


/**
 * pq que um componente renderiza?
 *
 * -hooks changed (mudou estado, contexto, reducer)
 * -props changed (mudou props)
 * -parent rendered (component pai renderizou)
 *
 * qual o fluxo de renderização?
 *
 * 1. O react recria o HTML da interface daquele componente
 * 2. o react compara a versão do HTML recriada com a versao anterior
 * 3.  se mudou alguma coisa, ele reescreve o HTML na tela
 *
 * Memo:
 * 1. o hooks changed, props changed(deep comparison)
 * 2. comparar a versão anterior dos hooks e props
 * 3. se mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>
export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={ handleSubmit(handleSearchTransactions) }>
      <input
        type="text"
        placeholder="Busque por transações"
        { ...register('query') }
      />

      <button type="submit" disabled={ isSubmitting }>
        <MagnifyingGlass size={ 20 } />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
