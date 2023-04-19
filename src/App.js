
import { useState } from 'react';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
      <div>
      {isLoggedIn ? (
        <Homepage/>
        ) : (
          <LoginPage onLogin={() => setIsLoggedIn(true)} />
        )}

      </div>
      
    </div>
  );
}

export default App;
