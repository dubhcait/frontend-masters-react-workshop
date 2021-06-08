import * as React from "react";
import { useMachine } from '@xstate/react';
// Import the machine and its initial state:
import { machine } from './machine';

const Exercise =  () => {
  const [state, send] = useMachine(machine); // delete me - use state machine instead!

  return (
    <div className="game" data-state={state}>
      <header>
        <h1>Exercise 03</h1>
      </header>

      <div className="display">
        <div style={{
          display: 'flex'
        }}>
          <img
            src="https://play.pokemonshowdown.com/sprites/trainers/ash.png"
            alt="Ash"
            width="250"
            height="300"
          />
  
          <img
            src="https://play.pokemonshowdown.com/sprites/trainers/misty-gen1.png"
            alt="Misty"
            width="250"
            height="300"
          />
        </div>
             <Field state={state.value} send={send} />
      </div>
    </div>
  );
};

const Field = ({ state , send}) => {
  switch (state) {
        case "initial":
      return (
        <div className="field">
          <p>Ready?</p>
        <button onClick={()=> send('START')}>Start</button>
        </div>
      );

    case "loading":
      return (
        <div className="field">
          <p>Hey! Did your Pokémon get any stronger? Let's find out</p>
                 <button onClick={()=> send('GO')}>Go</button>
        </div>
      );

    case "idle":
      return (
        <div className="field">
          <p>Pikachu I choose you!</p>
          <br />
          <br />
          <p>Go Staryu!</p>
        </div>
      );

    case "fight":
      return (
        <div
          className="field"
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            width="200"
            height="250"
          />
          <br />
          <h2>Vs</h2>
          <br />
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
            alt="Staryu"
            width="200"
            height="250"
          />
        </div>
      );

    default:
      return "loading";
  }
};
export default Exercise