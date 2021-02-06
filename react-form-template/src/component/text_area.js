import React from 'react';
import Label from './label';

class TextArea extends React.Component {

	render() {
		return (
			<div>
				<fieldset style={{ border: 'none' }}>
					<table>
						<tr>
							<td style = {{width : '16%'}}><Label id={this.props.id} label={this.props.label} /></td>
							<td className = "text-area">
								<div>
									<textarea id={this.props.id} name={this.props.id} class="form-control" required></textarea>
								</div>
							</td>
						</tr>
					</table>
				</fieldset>
			</div>
		)
	}
}

export default TextArea;