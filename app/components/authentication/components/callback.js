import React from 'react';
import {connect} from 'react-redux';

import {browserHistory} from 'react-router';

import userManager from '../../../utils/user-manager';

class CallbackPage extends React.Component {
	componentDidMount() {
		// register the callback and redirect on error or success.
		userManager.signinRedirectCallback(this.props.route)
			.then(user => this.successCallback(user))
			.catch(err => this.errorCallback(err))
	}

	successCallback = user => {
		browserHistory.push('/homepage');
	};

	errorCallback = err => {
		browserHistory.push('/homepage');
	};

	render() {
		return ( <div>Redirecting...</div> );
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(null, mapDispatchToProps)(CallbackPage);