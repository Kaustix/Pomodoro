require('../assets/css/styles.less');
require('../assets/images/favicon.ico');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Routes from './routes';
import Reducers from './components/reducers';
import Sagas from './components/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(Sagas);


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