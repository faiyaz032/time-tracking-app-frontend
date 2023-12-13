import { useEffect, useState } from 'react';
import { checkAuth } from './api';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const auth = await checkAuth();
        if (auth.status === 'success') {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    authCheck();
  }, []);

  return isAuthenticated ? (
    <DashBoard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <Login setIsAuthenticated={setIsAuthenticated} />
  );
}

export default App;
