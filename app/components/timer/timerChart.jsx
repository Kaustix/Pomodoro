var PieChart = require('../../../bower_components/jquery.easy-pie-chart/dist/easypiechart');

import React, {PropTypes} from 'react';

import * as dateTime from '../../extensions/dateTimeExtension';

class TimerChart extends React.Component {
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
		return (this.props.timeRemaining / this.props.initialTime) * 100;
	}

	formatTime() {
		return dateTime.ToString(this.props.timeRemaining);
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

TimerChart.propTypes = {
	initialTime: PropTypes.number,
	timeRemaining: PropTypes.number
};

export default TimerChart;