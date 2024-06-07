import { useEffect } from 'react';
import { auth, provider, signInWithPopup, getRedirectResult, db, doc, getDoc, setDoc } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/GoogleLogo.png';

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          await handleUserLogin(user);
        }
      } catch (error) {
        console.error("Error during redirect result handling", error);
      }
    };

    checkRedirectResult();
  }, []);

  const handleUserLogin = async (user) => {
    const userDocRef = doc(db, 'users', user.email);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, { email: user.email, role: 'waiting' });
      navigate('/waiting-for-access');
    } else {
      const userData = userDoc.data();
      switch (userData.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'team1':
          navigate('/team1-dashboard');
          break;
        case 'team2':
          navigate('/team2-dashboard');
          break;
        case 'waiting':
        default:
          navigate('/waiting-for-access');
          break;
      }
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await handleUserLogin(user);
      onLogin(user);
    } catch (error) {
      console.error("Error during login", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center py-10">
      <button onClick={handleLogin} className="btn btn-primary flex items-center space-x-2">
        <img src={GoogleLogo} alt="Google Logo" style={{ height: '25px' }} />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
