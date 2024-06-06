import { useState } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom';
import HeaderLogo from '../assets/DWBL-Logo.png';

const Header = ({ user, role, onLogout }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeNav();
    navigate('/');
  };

  return (
    <div className="sticky top-0 z-50 shadow-md bg-white">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Desktop Nav-Bar View */}
        <NavLink to="/" className="lg:flex hidden items-center space-x-3 rtl:space-x-reverse" onClick={closeNav}>
          <img src={HeaderLogo} className="h-10" alt="Diamond Warriors Baseball Logo" />
          <span className="self-center text-2xl text-primary font-semibold whitespace-nowrap">Diamond Warriors Baseball</span>
        </NavLink>
        {/* Mobile Nav-Bar View */}
        <NavLink to="/" className="flex lg:hidden items-center space-x-3 rtl:space-x-reverse" onClick={closeNav}>
          <img src={HeaderLogo} className="h-10" alt="Diamond Warriors Baseball Logo" />
          <span className="self-center text-xl text-primary font-semibold whitespace-nowrap">Diamond Warriors Baseball</span>
        </NavLink>
        {/* Nav Bar */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-md rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
          onClick={handleNavToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-700 text-primary rounded-lg md:flex-row md:text-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-secondary md:underline rounded md:bg-transparent md:text-secondary md:p-0 md:px-5" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5"} onClick={closeNav}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-secondary md:underline rounded md:bg-transparent md:text-secondary md:p-0 md:px-5" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5"} onClick={closeNav}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/reviews" className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-secondary md:underline rounded md:bg-transparent md:text-secondary md:p-0 md:px-5" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5"} onClick={closeNav}>Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-secondary md:underline rounded md:bg-transparent md:text-secondary md:p-0 md:px-5" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5"} onClick={closeNav}>Register</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to={role === 'admin' ? "/admin-dashboard" : role === 'team1' ? "/team1-dashboard" : role === 'team2' ? "/team2-dashboard" : "/team2-dashboard"} className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5" onClick={closeNav}>
                    {role === 'admin' ? "Admin Dashboard" : role === 'team1' ? "Team 1 Dashboard" : role === 'team2' ? "Team 2 Dashboard" : "Team 2 Dashboard"}
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-secondary md:underline rounded md:bg-transparent md:text-secondary md:p-0 md:px-5" : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 md:px-5"} onClick={closeNav}>Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;