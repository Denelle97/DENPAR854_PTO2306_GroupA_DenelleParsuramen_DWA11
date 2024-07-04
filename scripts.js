//This file logs the state changes to the console in real time.



import { store } from './store.js';
import { add, subtract, reset } from './actions.js';

/**
 * Attach store to the global window object to make it accessible in the console.
 */
//(window as any).store = store;

/**
 * Subscribes to store updates and logs the new state to the console.
 */
store.subscribe(() => console.log('State changed:', store.getState()));

/**
 * Logs the initial state to the console.
 */
console.log('Initial state:', store.getState()); // { count: 0 }

/**
 * Dispatches actions to demonstrate state changes.
 */
store.dispatch(add());
store.dispatch(add());
console.log('After two ADD actions:', store.getState()); // { count: 2 }

store.dispatch(subtract());
console.log('After one SUBTRACT action:', store.getState()); // { count: 1 }

store.dispatch(reset());
console.log('After RESET action:', store.getState()); // { count: 0 }