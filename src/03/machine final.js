import { createMachine, assign } from 'xstate'


export const MachineConfig = {
  initial: "initial",
  context: {
    pokemonAsh: '',
 pokemonMisty: ''
  },
  states: {
    initial: {
      on: {
        START: "loading",
      },
    },
    loading: {
      on: {
        GO: {
          target:"idle",

      
      
    },},
    
  },
  idle: {
         actions: [ assign({
        pokemonAsh: () => 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 
    pokemonMisty:()=> 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png'})
  ],
  after:{
    1000: 'fight'
  }
  },
  fight:{}
}};




export const machine = () => createMachine(MachineConfig)