/*
 * Jokes Reducer
 */

import produce from 'immer';
import { FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAIL } from './constants';

export const initialState = {
  jokes: [],
  isLoading: false,
  errorMessage: null,
};

/* eslint-disable default-case, no-param-reassign */
const jokesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_JOKE:
        draft.isLoading = true;
        draft.errorMessage = null;
        break;
      case FETCH_JOKE_SUCCESS:
        draft.jokes.push(action.joke);
        draft.isLoading = false;
        break;
      case FETCH_JOKE_FAIL:
        draft.errorMessage = action.errorMessage.toString();
        draft.isLoading = false;
        break;
    }
  });

export default jokesReducer;
