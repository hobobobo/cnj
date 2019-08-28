/**
 * Jokes selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectJokes = state => state.jokes || initialState;

const makeSelectJokes = () =>
  createSelector(
    selectJokes,
    state => state.jokes,
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectJokes,
    state => state.errorMessage,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectJokes,
    state => state.isLoading,
  );

export {
  selectJokes,
  makeSelectJokes,
  makeSelectErrorMessage,
  makeSelectIsLoading,
};
