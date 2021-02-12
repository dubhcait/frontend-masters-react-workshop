# Exercise 04 - Guarded Transitions

In this exercise, we'll model what happens when the timer runs out using [guarded transitions](https://xstate.js.org/docs/guides/guards.html).

## Goals

- Move all of the `assign(...)` actions to functions.
- Move all your `assign(...)` functions into the actions part of the `createMachine`'s config
- Create a service to randomly generate the pokemon's id, let's keep it to thee original 151

## Resources

https://xstate.js.org/docs/guides/communication.html#the-invoke-property
https://pokeapi.co/api/v2/pokemon/{id or name}/
