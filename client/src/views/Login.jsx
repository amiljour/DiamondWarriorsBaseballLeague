import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

const Login = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
  );
};

export default Login;