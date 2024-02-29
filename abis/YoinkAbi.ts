export const YoinkAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "yoinker",
        type: "address",
      },
    ],
    name: "Yoinked",
    type: "event",
  },
  {
    inputs: [],
    name: "lastYoinker",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yoink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
