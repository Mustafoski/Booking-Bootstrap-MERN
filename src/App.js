import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
