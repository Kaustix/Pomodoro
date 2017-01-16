import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
//import { push } from 'react-router-redux';

import { browserHistory } from 'react-router';

import userManager from '../../utils/userManager';

class CallbackPage extends React.Component {
	successCallback = () => {
		browserHistory.push('/homepage');
	};

	render() {
		// just redirect to '/' in both cases
		return (
			<CallbackComponent userManager={userManager} successCallback={this.successCallback} errorCallback={this.successCallback} />
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(null, mapDispatchToProps)(CallbackPage);