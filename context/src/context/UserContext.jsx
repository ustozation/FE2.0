import React, { Component } from 'react';

const UserContext = React.createContext(null);

export class UserContextProvider extends Component {
	state = {
		userData: {
			name: 'Alex',
			surname: 'Smith',
			age: 45,
		},
	};

	changeFirstName = name => {
		let data = {
			...this.state.userData,
			name,
		};
		console.log(data);

		this.setState(() => {
			return {
				userData: data,
			};
		});
	};

	render() {
		return (
			<UserContext.Provider
				value={{
					userData: this.state.userData,
					changeFirstName: this.changeFirstName,
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

export function UserContextConsumer({ children }) {
	return <UserContext.Consumer>{children}</UserContext.Consumer>;
}
