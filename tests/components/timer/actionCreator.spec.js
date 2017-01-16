import '../../helpers/chai-should';

import * as Actions from '../../../app/components/timer/timerActions';

describe('actions', () => {
	it('should create a set action', () => {
		Actions.set(10).should.deep.equal({type: Actions.SET, time: 10});
	});

	it('should create a start action', () => {
		Actions.start().should.deep.equal({type: Actions.START});
	});

	it('should create a stop action', () => {
		Actions.stop().should.deep.equal({type: Actions.STOP});
	});
});