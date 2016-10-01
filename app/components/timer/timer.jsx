import React, { PropTypes } from 'react';
import classNames from 'classnames';

import TimerButton from './timerButton';
import TimerChart from './timerChart';

const Timer  = ({initialTime, timeRemaining, isRunning, toggleTimer, setTimer, resetTimer}) => {
	const buttonStyleName = classNames({'danger': isRunning, 'success': !isRunning});
	const buttonText = isRunning ? 'Stop' : 'Start';

	return (
		<div className="container">
			<div className="row">
				<TimerButton style="danger" text="Pomodoro!" onClick={() => setTimer(1500)} offset={3}/>
				<TimerButton style="primary" text="Short Break" onClick={() => setTimer(300)}/>
				<TimerButton style="primary" text="Long Break" onClick={() => setTimer(1200)}/>
			</div>
			<div className="row">
				<TimerChart initialTime={initialTime} timeRemaining={timeRemaining}/>
			</div>
			<div className="row">
				<TimerButton style={buttonStyleName} text={`${buttonText}`} onClick={() => toggleTimer} offset={4}/>
				<TimerButton style="info" text="Reset" onClick={() => resetTimer()}/>
			</div>
		</div>
	)
};

Timer.propTypes = {
	initialTime: PropTypes.number.isRequired,
	timeRemaining: PropTypes.number.isRequired,
	isRunning: PropTypes.bool.isRequired,
	toggleTimer: PropTypes.func.isRequired,
	setTimer: PropTypes.func.isRequired,
	resetTimer: PropTypes.func.isRequired
};

export default Timer;