import React from 'react'
import {Link} from 'react-router';

const Header = () =>
	(
		<div className="container">
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Pomodoro Timer</Link>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="/about-pomodoro">What is it?</Link></li>
					</ul>
				</div>
			</nav>
		</div>
	);

export default Header;