import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSuccess = (response) => {
    setUser(response.profileObj);
  };

  const handleFailure = (response) => {
    setError(response.error);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <img src={user.imageUrl} alt={user.name} />
        </div>
      ) : (
        <GoogleLogin
          clientId="1028745300785-qfscbil18g2oenf2j808d4qgac542qgq.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default LoginPage;
