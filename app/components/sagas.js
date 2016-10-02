import {fork} from 'redux-saga/effects';

import {timerSaga} from './timer/timerSaga';

export default function* Sagas() {
	yield [
		fork(timerSaga)
	];
}