# Exercise 00 - Pokemon battle!!

Who doesn't love kicking their rivals butt. The aim of this workshop is to build a pokemon battle game.

We'll do it step by step

In this exercise, you're going to be creating a state machine from scratch.

## Goals

- Create a state machine config with 3 states: `initial`, `loading`, and `idle`.

Add 2 events `START` and `GO`.


  - The state machine should start in the `initial` state.
  - The machine should transition to `loading` next.
  - Finally the machine should transition to `idle`.

- The `initial` state is us before anything happens
- `START` event is going to represent us walking around the tall grass or having a verbal smack down with another trainer.
- The `loading` state is us getting our our pokemon.
- `GO` event is going represent us releasing our pokemon
- The `idle` state means we are ready to rumble.
