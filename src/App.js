import { useState } from 'react';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <div>
       
          <Homepage />
        
      </div>
    </div>
  );
}

export default App;
