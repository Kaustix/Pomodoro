import { combineReducers } from 'redux';
import TimerReducer from './timer/timerReducer';

export default combineReducers({
	Timer: TimerReducer
});
