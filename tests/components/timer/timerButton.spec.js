import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import '../../helpers/chai-should';

import TimerButton from '../../../app/components/timer/timerButton';

describe('timer button', () => {
	it('should render text', () => {
		const text = "Batman";
		const buttonWrapper = shallow(<TimerButton style="success" text={text} onClick={() => {}}/>);
		buttonWrapper.find('button').text().should.equal(text);
	});

	it('should respond to click events', () => {
		const onButtonClick =  sinon.spy();
		const buttonWrapper = shallow(<TimerButton style="success" text="button" onClick={onButtonClick}/>);
		buttonWrapper.find('button').simulate('click');
		onButtonClick.calledOnce.should.equal(true);
	});
});