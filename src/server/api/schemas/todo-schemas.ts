import { z } from 'zod'

import { IdSchema, NonEmptyStringSchema } from '@/utils/server/base-schemas'

export const TodoStatusSchema = z.enum(['completed', 'pending'])

export const TodoSchema = z.object({
  id: IdSchema,
  body: NonEmptyStringSchema,
  status: TodoStatusSchema,
})

export type TTodo = z.infer<typeof TodoSchema>
export type TTodoStatus = z.infer<typeof TodoStatusSchema>
