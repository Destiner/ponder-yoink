import { ponder } from "@/generated";

ponder.on("Yoink:Yoinked", async ({ event, context }) => {
  await context.db.Yoink.create({
    id: event.args.yoinker,
    data: {
      yoinker: event.args.yoinker,
    },
  });
});
