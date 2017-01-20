import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './shared/layout';

import TimerContainer from './components/timer/timerContainer';
import AboutPomodoro from './components/about/aboutPomodoro';

import home from './components/authentication/components/home';
import callback from './components/authentication/components/callback';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={TimerContainer}/>
			<Route path="/homepage" component={home}/>
			<Route path="/callback" component={callback}/>
			<Route path="/about-pomodoro" component={AboutPomodoro}/>
		</Route>
	</Router>
);

export default Routes;