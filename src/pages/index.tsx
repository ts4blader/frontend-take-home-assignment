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

const tabData = [
  { label: 'All', value: '' },
  { label: 'Completed', value: 'completed' },
  { label: 'Pending', value: 'pending' },
]

const Index = () => {
  const [tabValue, setTabValue] = useState<string>('')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          className="pt-10"
          value={tabValue}
          onValueChange={setTabValue}
        >
          <Tabs.List className="space-x-2">
            {tabData.map(({ label, value }) => (
              <Tabs.Trigger
                key={label}
                className="rounded-full border border-solid border-[#E2E8F0] px-6 py-3 font-bold text-accent transition-colors aria-selected:bg-accent aria-selected:text-white"
                value={value}
              >
                {label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList statusFilter={tabValue} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
