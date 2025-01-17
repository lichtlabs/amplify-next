import { dehydrate } from '@tanstack/react-query'
import { HydrationBoundary } from '@tanstack/react-query'

import { Fragment } from 'react'

import { getQueryClient } from '@/lib/query/client'
import { todoOptions } from '@/lib/query/options/todo'

import TodoList from './components/todo-list'

export default function TodoPage() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(todoOptions)

  return (
    <Fragment>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoList />
      </HydrationBoundary>
    </Fragment>
  )
}
