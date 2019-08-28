/*
 * Jokes Actions
 *
 */

import { FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAIL } from './constants';

export function fetchJoke() {
  return {
    type: FETCH_JOKE,
  };
}

export function fetchJokeSuccess(joke) {
  return {
    type: FETCH_JOKE_SUCCESS,
    joke,
  };
}

export function fetchJokeFail(errorMessage) {
  return {
    type: FETCH_JOKE_FAIL,
    errorMessage,
  };
}
