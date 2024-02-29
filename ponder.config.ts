import { createConfig } from "@ponder/core";
import { http } from "viem";

import { YoinkAbi } from "./abis/YoinkAbi";

export default createConfig({
  networks: {
    polygonMumbai: {
      chainId: 80001,
      transport: http(process.env.PONDER_RPC_URL_80001),
    },
  },
  contracts: {
    Yoink: {
      abi: YoinkAbi,
      address: "0x0b4459a1e71947d7ff529f8469d2b86b9bbbef1b",
      network: "polygonMumbai",
      startBlock: 46024400,
    },
  },
});
