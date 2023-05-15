import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const auth = localStorage.getItem('accessToken');

  if (!auth) {
    return <Navigate to={'/auth-login'} replace={true} />;
  } else {
    return children;
  }
}

export default PrivateRoute;
