import React from 'react';

class RadioButton extends React.Component {

	render() {
		return (
			<div class="form-group">
				<fieldset style={{border:'none'}}>
					<div class="form-group">
						<div class='radio'>
							<label>
								<input type={this.props.type} name={this.props.id} value={this.props.radioValue} required></input>
								{this.props.radioButtonLabel}
							</label>
						</div>
					</div>
				</fieldset>
			</div>
		)
	}
}

export default RadioButton;