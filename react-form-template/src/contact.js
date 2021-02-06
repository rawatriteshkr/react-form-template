import React from 'react';
import InputField from './component/input_field';
import TextArea from './component/text_area';
import RadioButton from './component/radio_button';
import Label from './component/label';
import SubmitButton from './component/button';

class Contact extends React.Component {

	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet='utf-8'></meta>
					<title>User Contact</title>

				</head>
				<body>
					<div class='container'>
						<div class="columns">
							<div class="column col-auto col-mx-auto">
								<div class="form-group">
									<form target="_self" id="bootstrapForm">
										<fieldset style={{ border: 'none' }}>
											<h2 style={{ alignContent: 'center' }}>Contact Form</h2>
										</fieldset>
										<InputField id='fname' label='FirstName' type='text' />
										<InputField id='lname' label='LastName' type='text' />
										<InputField id='phone' label='Phone Number' type='text' />
										<InputField id='email' label='Email' type='text' />
										<TextArea id='address' label='Address' />
										<fieldset style={{ border: 'none' }}>
											<table>
												<tr>
													<td style = {{width : '81.6%'}}><Label id='radioContact' label='Preferred Contact' /></td>
													<td>
														<RadioButton id='radioContact' style= {{width: '28%'}} type='radio' radioButtonLabel='Email' radioValue='email' />
														<RadioButton id='radioContact' style= {{width: '28%'}} type='radio' radioButtonLabel='Email' radioValue='email' />
													</td>
												</tr>
											</table>
										</fieldset>
										<TextArea id='message' label='Your Message' />
										<SubmitButton id='submitButton' color="primary" type='submit' buttonName='Submit' />
									</form>
								</div>
							</div>
						</div>
					</div>
				</body>
			</html>
		)
	}
}

export default Contact;