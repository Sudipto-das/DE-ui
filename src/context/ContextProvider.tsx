import React from 'react'
import AppProvider from './Context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient();


export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>,
            </RecoilRoot>
        </AppProvider>
    )
}
