import { z } from "zod";

export const ReferenceSchema = z.object({
  id: z.number(),
  code: z.number(),
  name: z.string(),
  deletedAt: z.date().optional(),
  isShow: z.boolean().default(true),
  isDefault: z.boolean().default(false),
  entityId: z.number(),
  entities: z.array(z.number()).optional(),
});

export const getReferenceSchema = ReferenceSchema.pick({ id: true });
export const getReferencesByEntityIdSchema = ReferenceSchema.pick({
  entities: true,
});
export type IGetReference = z.infer<typeof getReferenceSchema>;
export type IGetReferencesByEntityId = z.infer<
  typeof getReferencesByEntityIdSchema
>;
