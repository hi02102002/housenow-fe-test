import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const TABS = ['all', 'pending', 'completed'] as const

const Index = () => {
  const [status, setStatus] = useState('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          defaultValue="all"
          value={status}
          onValueChange={setStatus}
          className="my-10"
        >
          <Tabs.List className=" mb-10 flex items-center gap-2">
            {TABS.map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab}
                className="h-11 cursor-pointer rounded-full border border-gray-200 px-6 py-3 text-sm font-bold capitalize text-gray-700 transition-all data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value={status}>
            <TodoList status={status} />
          </Tabs.Content>
        </Tabs.Root>
        <CreateTodoForm />
      </div>
    </main>
  )
}

export default Index
