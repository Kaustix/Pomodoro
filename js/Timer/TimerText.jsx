import React from 'react';
import * as dateTimeExtension from '../Extensions/DateTimeExtension'

class TimerText extends React.Component {
	render() {
		return (
			<div className="text-center">
				<h1>{dateTimeExtension.secondsToString(this.props.seconds)}</h1>
			</div>
		)
	}
}

TimerText.propTypes = {
	initialSeconds: React.PropTypes.number
};

export default TimerText;