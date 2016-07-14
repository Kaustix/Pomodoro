import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './shared/layout';

import Timer from './components/timer/timer';
import AboutPomodoro from './components/about/about-pomodoro';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Timer}/>
			<Route path="/about-pomodoro" component={AboutPomodoro}/>
		</Route>
	</Router>
);

export default Routes;