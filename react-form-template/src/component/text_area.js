import React from 'react';
import Label from './label';

class TextArea extends React.Component{

	render(){
		return(
			<div style={{border:'none'}}>
				<fieldset style={{border:'none'}}>
					<Label id={this.props.id}  label={this.props.label}/>
					<div class="form-group">
						<textarea id={this.props.id} name={this.props.id} class="form-control" required></textarea>
					</div>
				</fieldset>
			</div>
		)
	}
}

export default TextArea;