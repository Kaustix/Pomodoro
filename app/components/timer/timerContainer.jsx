import React from 'react';
import {connect} from 'react-redux';
import * as actions from './timerDux';
import Timer from './timer';

const mapDispatchToProps = (dispatch) => ({
	setTimer: (time) => {dispatch(actions.setTimer(time))},
	toggleTimer: () => {dispatch(actions.toggleTimer())},
	resetTimer: () => {dispatch(actions.resetTimer())}
});

const mapStateToProps = (state) => ({
	initialTime: state.Timer.initialTime,
	timeRemaining: state.Timer.timeRemaining,
	isRunning: state.Timer.isRunning
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);
export default TimerContainer;