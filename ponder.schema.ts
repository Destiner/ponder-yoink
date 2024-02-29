import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Yoink: p.createTable({
    id: p.string(),
    yoinker: p.string(),
  }),
}));
