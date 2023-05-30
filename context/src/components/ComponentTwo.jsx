import { Component } from 'react';
import ComponentThree from './ComponentThree';

export default class ComponentTwo extends Component {
	render() {
		return (
			<div>
				<ComponentThree />
			</div>
		);
	}
}
