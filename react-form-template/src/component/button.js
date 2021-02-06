import React from 'react';

class SubmitButton extends React.Component {

	render() {
		return (
			<div>
				<button id={this.props.id} type={this.props.type} onclick={() => {
					window.alert('Form Submitted!!!')
				}}>{this.props.buttonName}</button>
			</div>
		)
	}
}

export default SubmitButton;