import React from 'react';

export default class extends React.Component {

	constructor() {
		super();
		this.state = {
			isRunning: false,
			secondsRemaining: 1500
		};

		this.toggleTimer = this.toggleTimer.bind(this);
	}

	tick() {
		this.setState({ secondsRemaining: this.state.secondsRemaining - 1});
		if (this.state.secondsRemaining === 0) {
			this.timerDone();
		}
	}

	timerDone() {
		clearInterval(this.timer);
	}

	toggleTimer() {
		if (!this.state.isRunning) {
			this.timer = setInterval(this.tick, 1000);
		} else {
 			this.timerDone();
		}

		this.setState({isRunning: !this.state.isRunning});
	}

	render() {
		const buttonClass = this.state.isRunning ? 'btn btn-success' : 'btn btn-danger';
		const buttonText =  this.state.isRunning ? 'Start' : 'Stop';
		return (
			<div className="container">
				<div className="jumbotron text-center">
					<h1>{this.state.secondsRemaining}</h1>
				</div>
				<div>
					<button id="timerButton" type="button" className={buttonClass} onclick={this.toggleTimer}>{buttonText} Pomodoro!</button>
				</div>
			</div>
		)
	};
}