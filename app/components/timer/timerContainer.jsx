import React from 'react';
import {connect} from 'react-redux';
import * as actions from './timerRedux';
import TimerPresenter from './timerPresenter';

const mapDispatchToProps = (dispatch) => ({
	set: (time) => {dispatch(actions.set(time))},
	start: () => {dispatch(actions.start())},
	stop: () => {dispatch(actions.stop())},
	reset: () => {dispatch(actions.reset())}
});

const mapStateToProps = (state) => ({
	initialTime: state.Timer.initialTime,
	timeRemaining: state.Timer.timeRemaining
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TimerPresenter);
export default TimerContainer;