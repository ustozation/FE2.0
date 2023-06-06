import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [authUser, setAuthUser] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const value = {
		authUser,
		setAuthUser,
		isLoggedIn,
		setIsLoggedIn,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
