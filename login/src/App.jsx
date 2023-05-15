import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Layout } from './layouts/Index';
import { Homepage } from './pages/Homepage';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { Commerce } from './pages/Commerce';
import PrivateRoute from './route/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to={'/dashboard'} />} />
          <Route path='/dashboard' element={<Homepage />} />
          <Route path='/dashboard/team' element={<Team />} />
          <Route path='/dashboard/blog' element={<Blog />} />
          <Route path='/dashboard/commerce' element={<Commerce />} />
        </Route>

        <Route path='/auth-login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
