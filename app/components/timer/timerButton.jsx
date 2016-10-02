import React, {PropTypes} from 'react';

const TimerButton = ({style, text, onClick, offset}) => (
	<div className={`col-sm-3 col-sm-offset-${offset}`}>
		<button type="button"
				className={`btn btn-${style} btn-block`}
				onClick={onClick}>{text}</button>
	</div>
);

TimerButton.propTypes = {
	style: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	offset: PropTypes.number
};

TimerButton.defaultProps = {
	offset: 0
};

export default TimerButton;