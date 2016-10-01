
export const setTimer = (initialTime) => ({ type: 'SET_TIMER', time: initialTime });
export const toggleTimer = () => ({type: 'TOGGLE_TIMER'});
export const resetTimer = () => ({type: 'RESET_TIMER'});
export const tick = () => ({ type: 'TICK' });

const initialState = {
	initialTime: 1500,
	timeRemaining: 1500,
	isRunning: false
};

function getTimeRemaining(time) {
	time = time - 1;
	if (time <= 0){
		time = 0;
	}
	return time;
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'SET_TIMER':
			return { ...state,
				initialTime: action.time,
				timeRemaining: action.time,
				isRunning: false};
		case 'RESET_TIMER':
			return {...state, timeRemaining: state.initialTime, isRunning: false};
		case 'TICK':
			return { ...state,
				isRunning: true,
				timeRemaining: getTimeRemaining(state.timeRemaining)};
		default:
			return state;
	}
}


//tick() {
	//this.setState({secondsRemaining: this.state.secondsRemaining - 1});
	//if (this.state.secondsRemaining === 0) {
//		this.resetTimer(this.state.initialSeconds);
//	}
//}

//toggleTimer() {
	//if (!this.state.isRunning) {
	//	this.timer = setInterval(this.tick, 1000);
	//} else {
//		clearInterval(this.timer);
//	}

//	this.setState({isRunning: !this.state.isRunning});
//}
