import React, { PropTypes } from 'react';

import TimerButton from './timerButton';
import TimerChart from './timerCounter';

const Timer  = ({initialTime, timeRemaining, set, start, stop, reset}) => {

	return (
		<div className="container">
			<div className="row">
				<TimerButton id="pomodoro" style="danger" text="Pomodoro!" onClick={() => set(1500)} offset={1}/>
				<TimerButton id="short" style="primary" text="Short Break" onClick={() => set(300)}/>
				<TimerButton id="long" style="primary" text="Long Break" onClick={() => set(1200)}/>
			</div>
			<div className="row">
				<TimerChart initialTime={initialTime} timeRemaining={timeRemaining}/>
			</div>
			<div className="row">
				<TimerButton id="start" style='success' text='Start' onClick={() => start()} offset={1}/>
				<TimerButton id="stop" style='danger' text='Stop' onClick={() => stop()} />
				<TimerButton id="reset" style="info" text="Reset" onClick={() => reset()}/>
			</div>
		</div>
	)
};

Timer.propTypes = {
	initialTime: PropTypes.number.isRequired,
	timeRemaining: PropTypes.number.isRequired,
	set: PropTypes.func.isRequired,
	start: PropTypes.func.isRequired,
	stop: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired
};

export default Timer;