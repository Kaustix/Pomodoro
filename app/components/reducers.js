import { combineReducers } from 'redux';
import TimerReducer from './timer/timerReducer';

import { reducer as oidcReducer } from 'redux-oidc';

export default combineReducers({
	Timer: TimerReducer,
	oidc: oidcReducer
});
