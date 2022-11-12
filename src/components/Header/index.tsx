import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Dialog.Root>
          <img src={logoImg} alt="logo dt money" />
          <div> 
            <span>
              Desenvolvido com ❤️ por:
            <a href="https://gilbertoaleite-desenvolvedor.netlify.app/" target="_blank" rel="noopener noreferrer"> Gilberto A Leite</a>
            </span>
            </div>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
