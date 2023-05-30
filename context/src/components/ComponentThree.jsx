import { Component } from 'react';
import { UserContextConsumer } from '../context/UserContext';

export default class ComponentThree extends Component {
	render() {
		return (
			<UserContextConsumer>
				{cnx => {
					return (
						<div>
							<h1>{cnx.userData.name}</h1>
							<button onClick={() => cnx.changeFirstName('Ali')}>
								Change firstname
							</button>
						</div>
					);
				}}
			</UserContextConsumer>
		);
	}
}
