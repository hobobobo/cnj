/**
 * Jokes saga
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchJokeFail, fetchJokeSuccess } from './actions';
import { FETCH_JOKE } from './constants';

/**
 * fetch random chuck norris jokes
 */
export function* fetchJoke() {
  const url = 'https://api.chucknorris.io/jokes/random';
  try {
    const { id, value } = yield call(request, url);
    yield put(fetchJokeSuccess({ id, value }));
  } catch (error) {
    yield put(fetchJokeFail('couldNotLoadJoke'));
  }
}

export default function* chuckNorriseJokesData() {
  yield takeLatest(FETCH_JOKE, fetchJoke);
}
