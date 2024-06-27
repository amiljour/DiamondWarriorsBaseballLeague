import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { auth, signOut, db, doc, getDoc, setDoc } from './firebase.js';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './views/Home.jsx';
import Gallery from './views/Gallery.jsx';
import Reviews from './views/Reviews.jsx';
import LoginAndRegistration from './views/LoginAndRegistration.jsx';
import AdminDashboard from './views/AdminDashboard.jsx';
import Team1Dashboard from './views/Team1Dashboard.jsx';
import Team2Dashboard from './views/Team2Dashboard.jsx';
import WaitingForAccess from './views/WaitingForAccess.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, 'users', user.email);
        const userSnap = await getDoc(userDoc);
        if (!userSnap.exists()) {
          await setDoc(userDoc, { email: user.email, role: 'waiting' });
          setRole('waiting');
        } else {
          const userData = userSnap.data();
          setRole(userData.role);
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <Header user={user} role={role} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/register" element={<LoginAndRegistration onLogin={setUser} />} />
        <Route path="/login" element={<LoginAndRegistration onLogin={setUser} />} />

        {user ? (
          role === 'admin' ? (
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          ) : role === 'team1' ? (
            <Route path="/team1-dashboard" element={<Team1Dashboard />} />
          ) : role === 'team2' ? (
            <Route path="/team2-dashboard" element={<Team2Dashboard />} />
          ) : (
            <Route path="/waiting-for-access" element={<WaitingForAccess />} />
          )
        ) : (
          <Route path="/login" element={<LoginAndRegistration onLogin={setUser} />} />
        )}
      </Routes>

      <Footer />
    </>
  );
}

export default App;