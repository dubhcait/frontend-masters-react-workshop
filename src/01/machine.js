export const MachineConfig = {
  initial: "initial",
  states: {
    initial: {
      on: {
        START: "loading",
      },
    },
    loading: {
      on: {
        GO: "idle",
      },
    },
    idle: {},
  },
};


