import Login from '../components/Login';
import Register from '../components/Register';

const LoginAndRegistration = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-10">
      <h1 className="text-3xl font-bold">Login or Register</h1>
      <div className="w-full max-w-sm space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <Login />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegistration;