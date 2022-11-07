import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton >
                    <X />
                </CloseButton >
                <Dialog.Title>Nova transação</Dialog.Title>

                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Valor" required />
                    <input type="text" placeholder="Categoria" required />
                    <button type="submit">Cadastrar</button>
                    <TransactionType>
                        <TransactionButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada</TransactionButton>
                        <TransactionButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24}/>
                            Saída</TransactionButton>

                    </TransactionType>

                </form>

            </Content>
        </Dialog.Portal>
    )
}