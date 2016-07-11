import React from 'react';
import * as dateTimeExtension from './Extensions/DateTimeExtension'

export default class extends React.Component {

	constructor() {
		super();
		this.state = {
			isRunning: false,
			secondsRemaining: 1500
		};

		this.toggleTimer = this.toggleTimer.bind(this);
		this.tick = this.tick.bind(this);
		this.timerDone = this.timerDone.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}

	tick() {
		this.setState({secondsRemaining: this.state.secondsRemaining - 1});
		if (this.state.secondsRemaining === 0) {
			this.resetTimer();
		}
	}

	toggleTimer() {
		if (!this.state.isRunning) {
			this.timer = setInterval(this.tick, 1000);
		} else {
			this.timerDone();
		}

		this.setState({isRunning: !this.state.isRunning});
	}

	timerDone() {
		clearInterval(this.timer);
	}

	resetTimer() {
		this.timerDone();
		this.setState({isRunning: false, secondsRemaining: 1500});
	}

	render() {
		const buttonClass = this.state.isRunning ? 'btn btn-danger' : 'btn btn-success';
		const buttonText = this.state.isRunning ? 'Stop' : 'Start';
		return (
			<div className="container">
				<div className="jumbotron text-center">
					<h1>{dateTimeExtension.secondsToString(this.state.secondsRemaining)}</h1>
				</div>
				<div className="row">
						<div className="col-sm-3 col-sm-offset-3">
							<button type="button" className={`${buttonClass} btn-block`} onClick={this.toggleTimer}>
								{buttonText} Pomodoro!
							</button>
						</div>
						<div className="col-sm-3">
							<button type="button" className="btn btn-info btn-block" onClick={this.resetTimer}>Rest</button>
						</div>
				</div>
			</div>
		)
	};
}