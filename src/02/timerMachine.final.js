import { createMachine } from "xstate";

export const machine = createMachine({
  initial: "initial",
  states: {
    initial: {
      after: {
        1000: "loading",
      },
    },
    loading: {
      after: {
        1000: "idle",
      },
    },
    idle: {},
  },
});
