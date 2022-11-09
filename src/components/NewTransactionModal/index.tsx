import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';
import { Controller, useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting }} = useForm<NewTransactionFormInputs>
        ({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        }
    })

    function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        console.log(data);
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton >
                    <X />
                </CloseButton >
                <Dialog.Title>Nova transação</Dialog.Title>

                <form onSubmit={ handleSubmit(handleCreateNewTransaction) }>
                    <input type="text"
                        placeholder="Descrição"
                        required
                        { ...register('description') } />

                    <input type="number"
                        placeholder="Valor"
                        required
                        { ...register('price', { valueAsNumber: true }) } />

                    <input type="text"
                        placeholder="Categoria"
                        required
                        { ...register('category') } />

                    <Controller
                        control={ control }
                        name="type"
                        render={ ({ field }) => {
                            console.log(field);
                            return (
                                <TransactionType onValueChange={ field.onChange } value={field.value}>
                                    <TransactionButton variant='income' value='income'>
                                        <ArrowCircleUp size={ 24 } />
                                        Entrada</TransactionButton>
                                    <TransactionButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={ 24 } />
                                        Saída</TransactionButton>
                                </TransactionType>
                            )
                        } } />
                    <button type="submit" disabled={ isSubmitting }>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}


