import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './shared/layout';

import TimerContainer from './components/timer/timerContainer';
import AboutPomodoro from './components/about/aboutPomodoro';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={TimerContainer}/>
			<Route path="/about-pomodoro" component={AboutPomodoro}/>
		</Route>
	</Router>
);

export default Routes;