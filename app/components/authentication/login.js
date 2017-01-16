import React from 'react';
import userManager from '../../utils/userManager';

class LoginPage extends React.Component {
	onLoginButtonClick = (event) => {
		event.preventDefault();
		userManager.signinRedirect();
	};

	render() {
		return (
			<div>
				<h3>Welcome, please log in to continue</h3>
				<button className="btn btn-primary" onClick={this.onLoginButtonClick}>Login Now!</button>
			</div>
		);
	}
}

export default LoginPage;