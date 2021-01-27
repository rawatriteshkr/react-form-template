import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact'
class App extends React.Component{
	render(){
		return(
			<div>
				<Contact/>
			</div>
			
		)
	}
}
ReactDOM.render(<App/>, document.getElementById('root'));
