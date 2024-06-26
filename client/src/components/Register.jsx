import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/waiting-for-access');
    } catch (error) {
      console.error("Error during registration", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleRegister} className="space-y-4  text-secondary">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="input input-bordered w-full"
        />
        <input 
          type="email" 
          placeholder="Confirm Email" 
          value={confirmEmail} 
          onChange={(e) => setConfirmEmail(e.target.value)} 
          required 
          className="input input-bordered w-full"
        />
        <div className="relative">
          <input 
            type={passwordVisible1 ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input input-bordered w-full"
          />
          <button 
            type="button" 
            className="absolute inset-y-0 right-0 flex items-center px-2" 
            onClick={togglePasswordVisibility1}
          >
            {passwordVisible1 ? "Hide" : "Show"}
          </button>
        </div>
        <div className="relative">
          <input 
            type={passwordVisible2 ? "text" : "password"} 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="input input-bordered w-full"
          />
          <button 
            type="button" 
            className="absolute inset-y-0 right-0 flex items-center px-2" 
            onClick={togglePasswordVisibility2}
          >
            {passwordVisible2 ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;