import '../../helpers/chai-should';

import TimerState from '../../factories/timerStateFactory';

import TimerReducer from '../../../app/components/timer/timerReducer';
import * as Actions from '../../../app/components/timer/timerActions';

describe('timer reducer', () => {
	describe('UNDEFINED action', () => {
		it('should return initial state', () => {
			TimerReducer(undefined, {}).should.deep.equal(TimerState.build());
		});
	});

	describe('SET action', () => {
		it('should set time with empty state', () => {
			TimerReducer({}, Actions.set(100)).should.deep.equal(TimerState.build({
				initialTime: 100,
				timeRemaining: 100
			}));
		});

		it('should set time with current states', () => {
			TimerReducer(TimerState.build(), Actions.set(200)).should.deep.equal(TimerState.build({
				initialTime: 200,
				timeRemaining: 200
			}));
		});

		it('should stop the timer', () => {
			TimerReducer(TimerState.build({isRunning: true}), Actions.set(1500)).should.deep.equal(TimerState.build());
		});
	});

	describe('START action', () => {
		it('should start the timer', () => {
			TimerReducer(TimerState.build(), Actions.start()).should.deep.equal(TimerState.build({isRunning: true}));
		});
	});

	describe('STOP action', () => {
		it('should stop the timer', () => {
			TimerReducer(TimerState.build({isRunning: true}), Actions.stop()).should.deep.equal(TimerState.build({isRunning: false}));
		});
	});

	describe('RESET action', () => {
		it('should reset time remaining', () => {
			TimerReducer(TimerState.build({timeRemaining: 1}), Actions.reset()).should.deep.equal(TimerState.build({timeRemaining: 1500}));
		});

		it('should stop the timer', () => {
			TimerReducer(TimerState.build({isRunning: true}), Actions.reset()).should.deep.equal(TimerState.build({isRunning: false}));
		});
	});

	describe('TICK action', () => {
		it('remaining time should be one less', () => {
			TimerReducer(TimerState.build({isRunning: true}), Actions.tick()).should.deep.equal(TimerState.build({
				timeRemaining: 1499,
				isRunning: true
			}));
		});

		it('should start the timer', () => {
			TimerReducer(TimerState.build(), Actions.tick()).should.deep.equal(TimerState.build({
				timeRemaining: 1499,
				isRunning: true
			}));
		});

		it('should stop the timer when no more time remaining', () => {
			TimerReducer(TimerState.build(
				{
					timeRemaining: 1,
					isRunning: true
				}),
				Actions.tick()).should.deep.equal(TimerState.build(
				{
					timeRemaining: 0,
					isRunning: false
				}
			));
		});

		it('should not set time below zero', () => {
			TimerReducer(TimerState.build({timeRemaining: 0}), Actions.tick()).should.deep.equal(TimerState.build({
				timeRemaining: 0,
				isRunning: false
			}));
		});
	});

});