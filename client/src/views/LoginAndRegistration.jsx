import Login from '../components/Login';
import Register from '../components/Register';

// eslint-disable-next-line react/prop-types
const LoginAndRegistration = ({ onLogin }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl pt-5 text-center text-primary font-bold">Login & Register</h1>
      <div className="flex flex-col md:flex-row items-center justify-center py-10 space-y-5 md:space-y-0 md:space-x-5 items-baseline">
        {/* Login */}
        <div className="w-full md:w-1/2 max-w-sm bg-white p-6 mx-5 rounded-lg shadow-md overflow-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Login</h2>
          <Login onLogin={onLogin} />
        </div>
        {/* Registration */}
        <div className="w-full md:w-1/2 max-w-sm bg-white p-6 mx-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Register</h2>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegistration;