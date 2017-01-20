import { combineReducers } from 'redux';
import TimerReducer from './timer/timerReducer';

import UserReducer from './authentication/reducer/user-reducer';

export default combineReducers({
	Timer: TimerReducer,
	User: UserReducer
});
