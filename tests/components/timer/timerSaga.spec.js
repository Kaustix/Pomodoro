import '../../helpers/chai-should';

import {put, call, take, race, select} from 'redux-saga/effects';
import {takeEvery, delay} from 'redux-saga';
import * as Actions from '../../../app/components/timer/timerActions';
import {timerSaga, timerRunner, isRunningSelector} from '../../../app/components/timer/timerSaga';

describe('timer saga', () => {
	it('should run timer and stop when state is stopped', () => {
		const generator = timerRunner();

		generator.next().value.should.deep.equal(
			race({
				stopped: take(Actions.STOP),
				timeout: call(delay, 1000)
			}));
		generator.next({stopped: false}).value.should.deep.equal(select(isRunningSelector));
		generator.next().value.should.deep.equal(put(Actions.tick()));
		should.equal(generator.next({isRunning:false}).value, undefined);
	});

	it('should keep running when state is running', () => {
		const generator = timerRunner();

		generator.next().value.should.deep.equal(
			race({
				stopped: take(Actions.STOP),
				timeout: call(delay, 1000)
			}));
		generator.next({stopped: false}).value.should.deep.equal(select(isRunningSelector));
		generator.next({isRunning: true}).value.should.deep.equal(put(Actions.tick()));
		generator.next().value.should.exist;
	});

	it('should stop timer', () => {
		const generator = timerRunner();

		generator.next().value.should.deep.equal(
			race({
				stopped: take(Actions.STOP),
				timeout: call(delay, 1000)
			}));
		should.equal(generator.next({stopped: true}).value, undefined);
	});


	it('should execute runner on start actions', () => {
		const generator = timerSaga();
		generator.next().value.should.deep.equal(call(takeEvery, Actions.START, timerRunner));
	})
});