import React from 'react'
import Label from './label';

class InputField extends React.Component {

	render() {
		return (
			<div class="form-group">
				<fieldset style={{border:'none'}}>
				 <Label id={this.props.id}  label={this.props.label}/>
						<input id={this.props.id} type={this.props.type} name={this.props.id} class="form-control" required />
				</fieldset>
			</div>
		)
	}
}

export default InputField;