import React from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user logged in:", { email, password });
  };

  return (
    <div className="flex">
      {/* Left Side - Form */}
      <div className="w-1/2 h-screen flex flex-col justify-center items-center bg-gray-100">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-lg shadow-md w-3/4"
        >
          <div className="mb-6 flex justify-center">
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <h2 className="text-xl font-semibold mb-6 text-center">Welcome back!</h2>
          <p className="text-gray-600 mb-6 text-center">
            Enter your email and password to log in
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border rounded" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border rounded" 
              placeholder="Enter your password" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
          >
            Sign In
          </button>

          <p className="text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 hidden md:block bg-gray-800">
        <div className="h-full flex flex-col items-center justify-center">
          <img 
            src={login} 
            alt="Login illustration" 
            className="w-full h-[750px] object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
