import { useEffect, useState } from 'react';
import { checkAuth } from './api';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [entries, setEntries] = useState(null);
  const [name, setName] = useState('');
  const [registeredClicked, setRegisteredClicked] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const auth = await checkAuth();

        if (auth.status === 'success') {
          setName(auth.data.name);
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

  let pageToShow;

  pageToShow = (
    <Login
      setIsAuthenticated={setIsAuthenticated}
      setRegisteredClicked={setRegisteredClicked}
      setName={setName}
    />
  );

  if (registeredClicked) {
    pageToShow = <Register setRegisteredClicked={setRegisteredClicked} />;
  }

  return isAuthenticated ? (
    <Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
  ) : (
    pageToShow
  );
}

export default App;
