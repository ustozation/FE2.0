import { useAuth } from '../hooks/useAuth';

export default function ComponentThree() {
	let { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

	return <h1>{}</h1>;
}
