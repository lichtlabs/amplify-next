'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { getQueryClient, localStoragePersister } from '@/lib/query/client'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <PersistQueryClientProvider
      onSuccess={() => console.info('query client persisted')}
      client={queryClient}
      persistOptions={{
        persister: localStoragePersister,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => query.state.status === 'success' && !!query.meta?.persist,
          shouldDehydrateMutation: (mutation) => mutation.state.status === 'success' && !!mutation.meta?.persist,
        },
      }}
    >
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </PersistQueryClientProvider>
  )
}
