//This file defines the action types and action creators

/**
 * Action types for the counter.
 * @constant {string}
 */
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

/**
 * Creates an ADD action.
 * @returns {Object} The ADD action.
 */
export const add = () => ({
    type: ADD
});

/**
 * Creates a SUBTRACT action.
 * @returns {Object} The SUBTRACT action.
 */
export const subtract = () => ({
    type: SUBTRACT
});

/**
 * Creates a RESET action.
 * @returns {Object} The RESET action.
 */
export const reset = () => ({
    type: RESET
});