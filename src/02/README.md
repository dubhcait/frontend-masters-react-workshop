# Exercise 02 - Context

In this exercise, we're going to use `events` to change state rather than delayed transitions.


## Goals

  - When a `LOAD` event occurs in `initial`, the machine should transition to `loading`.
  - When a `FETCHED` event occurs in `loading`, the machine should transition to `idle`.
  - Create buttons in the UI to `send` these events. 

- The `initial` state is going to represent us walking around the tall grass or having a verbal smack down with another trainer.
- The `LOAD` event will signify the start of a battle.
- The `loading` state is us getting our our pokemon.
- The `FETCHED` event means we have got our pokemon and an `idle` state means we are ready to rumble. 


