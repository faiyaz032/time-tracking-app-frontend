import { useState } from 'react';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <DashBoard /> : <Login />;
}

export default App;
