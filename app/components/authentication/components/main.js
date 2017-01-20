import React from 'react';
import { connect } from 'react-redux';
import userManager from '../../../utils/user-manager';

class MainPage extends React.Component {

	// display the current user
	showUserInfoButtonClick = (event) => {
		event.preventDefault();
		alert(JSON.stringify(this.props.user, null, 2));
	};

	// log out
	onLogoutButtonClicked = (event) => {
		event.preventDefault();
		userManager.removeUser(); // removes the user data from sessionStorage
	};

	render() {
		const { user } = this.props;

		return (
		<div>
			<h3>Welcome, {user ? user.profile.name : 'Mister Unknown'}!</h3>
			<button onClick={this.showUserInfoButtonClick}>Show user info</button>
			<button onClick={this.onLogoutButtonClicked}>Logout</button>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.User.user,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);