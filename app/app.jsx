require('../assets/css/styles.less');
require('../assets/images/favicon.ico');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';

import Routes from './routes';
import Reducers from './reducers';

const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const store = createStoreDevTools(Reducers);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Routes/>
			</Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));