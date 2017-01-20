require('../assets/css/styles.less');
require('../assets/images/favicon.ico');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
const logger = createLogger();

import Routes from './routes';
import Reducers from './components/reducers';
import Sagas from './components/sagas';

import bootstrap from './utils/oidc-bootstrapper';
import createOidcMiddleware from './utils/oidc-middleware';

const  oidcMiddleware = createOidcMiddleware();
const sagaMiddleware = createSagaMiddleware();
const storeMiddleware = compose(
	applyMiddleware(oidcMiddleware, sagaMiddleware, logger),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(Reducers, storeMiddleware);
bootstrap(store);

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