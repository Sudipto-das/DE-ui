import React from 'react'
import AppProvider from './Context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();


export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
        </AppProvider>
    )
}
