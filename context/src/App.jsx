import ComponentOne from './components/ComponentOne';
import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		text: 'Hello Context',
	};
	render() {
		return (
			<>
				<ComponentOne />
			</>
		);
	}
}

export default App;
