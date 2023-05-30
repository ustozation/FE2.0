import { Component } from 'react';
import ComponentTwo from './ComponentTwo';

export default class ComponentOne extends Component {
	render() {
		return (
			<div>
				<ComponentTwo />
			</div>
		);
	}
}
