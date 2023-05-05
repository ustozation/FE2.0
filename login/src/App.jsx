import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Layout } from './layouts/Index';
import { Homepage } from './pages/Homepage';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { Commerce } from './pages/Commerce';

function App() {
  return (
    <>
      {/* localhost:3000/team */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/commerce' element={<Commerce />} />
        </Route>
        <Route path='/auth-login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
