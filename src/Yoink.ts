import { ponder } from "@/generated";

ponder.on("Yoink:Yoinked", async ({ event, context }) => {
  await context.db.Yoink.create({
    id: `${event.transaction.hash}-${event.log.logIndex}`,
    data: {
      yoinker: event.args.yoinker,
      txNonce: event.transaction.nonce,
    },
  });
});
