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


// create the middleware with the userManager
import createOidcMiddleware from 'redux-oidc';
import userManager from './utils/userManager';
const oidcMiddleware = createOidcMiddleware(userManager);

import {OidcProvider} from 'redux-oidc';

const sagaMiddleware = createSagaMiddleware();
const storeMiddleware = compose(
	applyMiddleware(oidcMiddleware, sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(Reducers, storeMiddleware);
sagaMiddleware.run(Sagas);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<OidcProvider store={store} userManager={userManager}>
					<Routes/>
				</OidcProvider>
			</Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));