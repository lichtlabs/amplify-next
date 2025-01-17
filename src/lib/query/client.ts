import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient, defaultShouldDehydrateQuery, isServer } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { compress, decompress } from 'lz-string'

let browserQueryClient: QueryClient | undefined = undefined

const storage = !isServer ? window.localStorage : undefined

export const localStoragePersister = createSyncStoragePersister({
  storage: storage,
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decompress(data)),
})

persistQueryClient({
  queryClient: makeQueryClient(),
  persister: localStoragePersister,
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
})

function makeQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        gcTime: 60 * 1000, // 1 minute
        retry: 3,
        retryDelay: 1000,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
    },
  })

  return queryClient
}

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
