import { useState, useEffect } from 'react'; // Import useEffect from React
import { auth, provider, signInWithPopup, getRedirectResult, signInWithEmailAndPassword, db, doc, getDoc, setDoc } from '../firebase';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/GoogleLogo.png';

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const handleGoogleLogin = async () => {
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

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await handleUserLogin(user);
      onLogin(user);
    } catch (error) {
      console.error("Error during login", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="space-y-4">
      <button onClick={handleGoogleLogin} className="btn btn-primary flex items-center space-x-2">
        <img src={GoogleLogo} alt="Google Logo" style={{ height: '25px' }} />
        <span>Login or Register with Google</span>
      </button>
      <form onSubmit={handleEmailPasswordLogin} className="space-y-4 text-secondary">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="input input-bordered w-full"
        />
        <div className="relative">
          <input 
            type={passwordVisible ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input input-bordered w-full"
          />
          <button 
            type="button" 
            className="absolute inset-y-0 right-0 flex items-center px-2" 
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;