import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import '../../helpers/chai-should';

import Timer from '../../../app/components/timer/timer';

function setup() {
	const props = {
		initialTime: 1500,
		timeRemaining: 1500,
		set: sinon.spy(),
		start: sinon.spy(),
		stop: sinon.spy(),
		reset: sinon.spy()
	};

	const timerWrapper = shallow(<Timer {...props} />);

	return {
		props,
		timerWrapper
	}
}

describe('timer component', () => {
	it('should render pomodoro button', () => {
		const {timerWrapper} = setup();
		timerWrapper.find('#pomodoro').should.have.length(1);
	});

	it('pomodoro button on click should set timer to 15min', () => {
		const {timerWrapper, props} = setup();
		timerWrapper.find("#pomodoro").props().onClick();
		props.set.args[0][0].should.equal(1500);
	});

	it('pomodoro button on click should call set timer', () => {
		const {timerWrapper, props} = setup();
		timerWrapper.find("#pomodoro").props().onClick();
		props.set.calledOnce.should.equal(true);
	})
});

