import React from 'react';

import TimerButton from './timer-button';
import TimerText from './timer-text';

export default class Timer extends React.Component {

	constructor() {
		super();
		this.state = {
			isRunning: false,
			initialSeconds: 1500,
			secondsRemaining: 1500
		};

		this.tick = this.tick.bind(this);
		this.toggleTimer = this.toggleTimer.bind(this);
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
			clearInterval(this.timer);
		}

		this.setState({isRunning: !this.state.isRunning});
	}

	resetTimer(seconds)  {
		const resetTime = seconds === null ? this.state.initialSeconds : seconds;
		clearInterval(this.timer);
		this.setState({isRunning: false, initialSeconds: resetTime, secondsRemaining: resetTime});
	};

	render() {
		const buttonClass = this.state.isRunning ? 'danger' : 'success';
		const buttonText = this.state.isRunning ? 'Stop' : 'Start';
		return (
			<div className="container">
				<div className="row">
					<TimerButton class="danger" text="Pomodoro!" clickEvent={() => this.resetTimer(1500)} offset={3}/>
					<TimerButton class="primary" text="Short Break" clickEvent={() => this.resetTimer(300)}/>
					<TimerButton class="primary" text="Long Break" clickEvent={() => this.resetTimer(1200)}/>
				</div>
				<div className="row">
					<TimerText seconds={this.state.secondsRemaining}/>
				</div>
				<div className="row">
					<TimerButton class={buttonClass} text={`${buttonText}`} clickEvent={this.toggleTimer} offset={4}/>
					<TimerButton class="info" text="Reset" clickEvent={() => this.resetTimer()}/>
				</div>
			</div>
		)
	}
}