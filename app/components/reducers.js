import { combineReducers } from 'redux';
import TimerReducer from './timer/timerRedux';

export default combineReducers({
	Timer: TimerReducer
});
