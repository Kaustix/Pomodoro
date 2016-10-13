import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './timerActions';
import TimerPresenter from './timer';

const mapDispatchToProps = (dispatch) => ({
	set: (time) => {dispatch(Actions.set(time))},
	start: () => {dispatch(Actions.start())},
	stop: () => {dispatch(Actions.stop())},
	reset: () => {dispatch(Actions.reset())}
});

const mapStateToProps = (state) => ({
	initialTime: state.Timer.initialTime,
	timeRemaining: state.Timer.timeRemaining
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TimerPresenter);
export default TimerContainer;