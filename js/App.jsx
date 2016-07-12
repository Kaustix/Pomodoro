require('../css/styles.less');
require('../images/favicon.ico');

import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Timer/Timer';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Timer />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));