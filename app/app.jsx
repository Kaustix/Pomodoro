require('../assets/css/styles.less');
require('../assets/images/favicon.ico');

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

class App extends React.Component {
	render() {
		return (
			<Routes/>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));