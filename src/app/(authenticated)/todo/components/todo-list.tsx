'use client'

import { useAuthenticator } from '@aws-amplify/ui-react'
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

import amplifyClient from '@/lib/amplify-client'
import { todoOptions } from '@/lib/query/options/todo'

type Todo = {
  id?: string
  content: string
}

export default function TodoList() {
  const { data: todos } = useSuspenseQuery(todoOptions)
  const { signOut, user } = useAuthenticator((context) => [context.signOut])

  const queryClient = useQueryClient()

  const todoMutation = useMutation({
    mutationFn: (todo: Todo) => amplifyClient.models.Todo.create(todo),
    onSuccess: () => {
      console.debug('INFO: Todo mutation success')
      queryClient.invalidateQueries(todoOptions)
      toast.success('Todo added')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    meta: {
      persist: true,
    },
  })

  const handleAddTodo = (todo: Todo) => {
    todoMutation.mutate(todo)
  }

  const handleDeleteAllTodos = async () => {
    try {
      await Promise.all(todos?.data?.map((todo) => amplifyClient.models.Todo.delete({ id: todo.id })) || [])
      queryClient.invalidateQueries(todoOptions)
      toast.success('All todos deleted')
    } catch {
      toast.error('Failed to delete todos')
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <div className="flex items-center gap-2">
          <p>{user?.username}</p>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <Button
          onClick={() => handleAddTodo({ content: 'New Todo' })}
          className="flex-1 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Add Todo
        </Button>
        <Button
          onClick={handleDeleteAllTodos}
          className="flex-1 rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600"
        >
          Delete All
        </Button>
      </div>
      <ul className="space-y-3">
        {todos?.data?.map((todo, index) => (
          <TodoItem
            key={todo.id}
            content={`${index + 1}. ${todo.content}`}
            className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          />
        ))}
      </ul>
    </div>
  )
}

function TodoItem({ content, className }: { content: string; className: string }) {
  return <li className={className}>{content}</li>
}
