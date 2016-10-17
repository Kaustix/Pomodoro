import {take, put, call, race, select} from 'redux-saga/effects';
import {takeEvery, delay} from 'redux-saga';
import * as Actions from './timerActions';

export const isRunningSelector = state => state.Timer.isRunning;

export function* timerRunner() {
	var isRunning = true;
	while (isRunning) {
		const {stopped} = yield race({
			stopped: take(Actions.STOP),
			timeout: call(delay, 1000)
		});

		if (stopped) {
			isRunning = false;
		} else {
			isRunning = yield select(isRunningSelector);
			yield put(Actions.tick());
		}
	}
}

export function* timerSaga() {
	yield call(takeEvery, Actions.START, timerRunner);
}