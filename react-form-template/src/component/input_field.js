import React from 'react'
import Label from './label';

class InputField extends React.Component {

	render() {
		return (
			<div style = {{width:'50%'}}>
				<fieldset style={{border:'none',width:'100%'}}>
					<table>
						<tr>
							<td style = {{width : '16%'}}><Label id={this.props.id}  label={this.props.label}/></td>
							<td className = "input-field">
								<input id={this.props.id} type={this.props.type} name={this.props.id} class="form-control" required />
							</td>
						</tr>
					</table>
				</fieldset>
			</div>
		)
	}
}

export default InputField;