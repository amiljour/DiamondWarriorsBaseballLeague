import { auth, provider, signInWithPopup } from '../firebase';

// eslint-disable-next-line react/prop-types
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
    <div className="flex justify-center">
      <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
    </div>
  );
};

export default Login;