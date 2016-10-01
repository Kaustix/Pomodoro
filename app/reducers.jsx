import { combineReducers } from 'redux';
import TimerReducer from './components/timer/timerDux';

export default combineReducers({
	Timer: TimerReducer
});
