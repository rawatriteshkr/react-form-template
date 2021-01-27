import React from 'react';

class Label extends React.Component {

	render() {
		return (
			<label for={this.props.id}>{this.props.label}</label>
		)
	}
}

export default Label;