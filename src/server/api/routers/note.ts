import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "./../trpc";

export const noteRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({ title: z.string(), content: z.string(), docId: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.note.create({
        data: {
          title: input.title,
          docId: input.docId,
          content: input.content,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure
    .input(z.object({ docId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.note.findMany({
        where: {
          docId: input.docId,
        },
      });
    }),
});
