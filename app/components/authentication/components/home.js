import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './login';
import MainPage from './main';

class HomePage extends React.Component {
	render() {
		return !this.props.user || this.props.user.expired ? <LoginPage/> : <MainPage />;
	}
}

function mapStateToProps(state) {
	console.log(state.User.user);
	return {
		user: state.User.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);