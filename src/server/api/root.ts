import { noteRouter } from "./routers/note";
import { docRouter } from "./routers/doc";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  doc: docRouter,
  note: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
