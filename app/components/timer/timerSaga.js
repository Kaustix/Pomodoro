import {actionChannel, take, put, call, race, select} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import * as actions from './timerRedux';

export function* timerSaga() {
	const channel = yield actionChannel('START');
	while (yield take(channel)) {
		let isRunning = true;
		while (isRunning) {
			const {stopped, finished} = yield race({
				stopped: take('STOP'),
				timeout: call(delay, 1000)
			});

			if (stopped || finished) {
				isRunning = false;
			} else {
				isRunning = yield select(state => state.Timer.isRunning);
				yield put(actions.tick());
			}
		}
	}
}