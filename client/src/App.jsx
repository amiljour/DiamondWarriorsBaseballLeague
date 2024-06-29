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
import Team1Admin from './views/Team1Admin.jsx';
import Team2Admin from './views/Team2Admin.jsx';
import Team1Dashboard from './views/Team1Dashboard.jsx';
import Team2Dashboard from './views/Team2Dashboard.jsx';
import WaitingForAccess from './views/WaitingForAccess.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
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
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  // Show a loading indicator while authentication state is being determined
  if (loading) {
    return <div className='text-center'>
        <h1 className='text-3xl font-bold text-black p-5'>Loading...</h1>
      </div>; 
  }

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

        <Route element={<PrivateRoute user={user} role={role} requiredRole="admin" />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/team1-admin" element={<Team1Admin />} />
          <Route path="/team2-admin" element={<Team2Admin />} />
        </Route>

        <Route element={<PrivateRoute user={user} role={role} requiredRole="team1" />}>
          <Route path="/team1-dashboard" element={<Team1Dashboard />} />
        </Route>

        <Route element={<PrivateRoute user={user} role={role} requiredRole="team2" />}>
          <Route path="/team2-dashboard" element={<Team2Dashboard />} />
        </Route>

        {role === 'waiting' && (
          <Route path="/waiting-for-access" element={<WaitingForAccess />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;