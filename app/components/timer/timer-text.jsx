var PieChart = require('../../../bower_components/jquery.easy-pie-chart/dist/easypiechart');

import React from 'react';

import * as dateTime from '../../extensions/date-time-extension';

class TimerText extends React.Component {
	constructor() {
		super();
		this.state = { chart : "" };
		this.formatTime = this.formatTime.bind(this);
		this.formatPercentage = this.formatPercentage.bind(this);
	}

	componentDidMount() {
		this.setState({
			chart: new PieChart(document.querySelector('.chart'), {
				barColor: '#389538',
				trackColor: false,
				scaleColor: false,
				lineWidth: 10,
				lineCap: 'butt',
				size: 150
			})
		});
	}

	componentDidUpdate() {
		this.state.chart.update(this.formatPercentage());
	}

	formatPercentage() {
		return (this.props.secondsRemaining / this.props.initialSeconds) * 100;
	}

	formatTime() {
		return dateTime.secondsToString(this.props.secondsRemaining);
	}

	render() {
		return (
			<div className="text-center">
				<div className="chart" data-percent={this.formatPercentage()} id="easy-pie-chart">
					<span className="time-text">{this.formatTime()}</span>
				</div>
			</div>
		)
	}
}

TimerText.propTypes = {
	initialSeconds: React.PropTypes.number,
	secondsRemaining: React.PropTypes.number
};

export default TimerText;