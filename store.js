// This file creates the Redux store

import { ADD, SUBTRACT, RESET } from './actions.js';

/**
 * @typedef {Object} State
 * @property {number} count - The current count in the state.
 */

/**
 * The initial state of the counter.
 * @type {State}
 */
const initialState = {
    count: 0
};

/**
 * Reducer function to handle actions and update state.
 * @param {State} state - The current state of the counter.
 * @param {Object} action - The action to be handled.
 * @param {string} action.type - The type of action.
 * @returns {State} The new state of the counter.
 */
function counterReducer(state = initialState, action) {
    switch(action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUBTRACT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
}

/**
 * Creates a store to manage the state.
 * @param {Function} reducer - The reducer function to handle actions.
 * @returns {Object} The store with `getState`, `dispatch`, and `subscribe` methods.
 */
export function createStore(reducer) {
    let state;
    let listeners = [];

    /**
     * Gets the current state.
     * @returns {State} The current state.
     */
    const getState = () => state;

    /**
     * Dispatches an action to update the state.
     * @param {Object} action - The action to be dispatched.
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    /**
     * Subscribes a listener to state changes.
     * @param {Function} listener - The listener to be called on state changes.
     * @returns {Function} A function to unsubscribe the listener.
     */
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Initialize the state
    dispatch({});

    return { getState, dispatch, subscribe };
}

// Create the store
export const store = createStore(counterReducer);