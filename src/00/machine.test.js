

import { MachineConfig } from './machine.final'
import { createMachine } from 'xstate'



describe('Exercise 00', () => {
  test('should transition from initial to loading on START', () => {
            // PRECONDITION ACTION
            const activeState = createMachine(MachineConfig)
                .transition('initial', 'START');
            // POSTCONDITIONS
            expect(activeState.matches('loading')).toBe(true); })

  test('should transition from initial to loading on START', () => {
            // PRECONDITION ACTION
            const activeState = createMachine(MachineConfig)
                .transition('loading', 'GO');
            // POSTCONDITIONS
            expect(activeState.matches('idle')).toBe(true); })
      
  
})

