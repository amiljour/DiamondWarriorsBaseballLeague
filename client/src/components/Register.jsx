import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      console.error("Error during registration", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleRegister} className="space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="input input-bordered w-full"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;