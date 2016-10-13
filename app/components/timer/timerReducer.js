import * as Actions from './timerActions';

const initialState = {
	initialTime: 1500,
	timeRemaining: 1500,
	isRunning: false
};

const getTimeRemaining = (time) => {
	const timeRemaining = time - 1;
	return timeRemaining < 0 ? 0 : timeRemaining;
};

const isRunning = (timeRemaining, initialTime) => {
	return timeRemaining < initialTime && timeRemaining !== 0;
};

export default function (state = initialState, action) {
	switch (action.type) {
		case Actions.SET:
			return {
				...state,
				initialTime: action.time,
				timeRemaining: action.time,
				isRunning: false
			};
		case Actions.START:
			return {...state, isRunning: true};
		case Actions.STOP:
			return {...state, isRunning: false};
		case Actions.RESET:
			return {...state, timeRemaining: state.initialTime, isRunning: false};
		case Actions.TICK:
			const timeRemaining = getTimeRemaining(state.timeRemaining);
			return {
				...state,
				timeRemaining: timeRemaining,
				isRunning: isRunning(timeRemaining, state.initialTime)
			};
		default:
			return state;
	}
}