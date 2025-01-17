import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import amplifyClient from '@/lib/amplify-client'

export const todoOptions = queryOptions({
  queryKey: ['todo'],
  queryFn: () => amplifyClient.models.Todo.list(),
  placeholderData: keepPreviousData,
  staleTime: 1000 * 60 * 5, // 5 minutes
  gcTime: 1000 * 60 * 30, // 30 minutes
  meta: {
    persist: true,
  },
  // Only refetch on mount and reconnect for better performance
  refetchOnMount: 'always',
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
})
