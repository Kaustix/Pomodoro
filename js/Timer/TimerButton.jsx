import React from 'react';

class TimerButton extends React.Component {
	render() {
		return (
			<div className={`col-sm-2 col-sm-offset-${this.props.offset}`}>
				<button type="button"
						className={`btn btn-${this.props.class} btn-block`}
						onClick={this.props.clickEvent}>{this.props.text}</button>
			</div>
		);
	}
}

TimerButton.propTypes = {
		class: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		clickEvent: React.PropTypes.func.isRequired,
		offset: React.PropTypes.number
};

TimerButton.defaultProps = {
	offset: 0
};

export {TimerButton};