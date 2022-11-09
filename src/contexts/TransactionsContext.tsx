import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}
interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode;
}
export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transaction', {
            params:{
                q: query,
            }
        });

        setTransactions(response.data);
        // console.log(data)
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={ { transactions, fetchTransactions } }>
            { children }
        </TransactionsContext.Provider>
    )

}