import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const docRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.doc.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.doc.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
});
