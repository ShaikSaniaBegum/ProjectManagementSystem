import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Activity, Home, Eye, EyeOff ,LogIn } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('username', response.data.username);
      
      if (response.data.role === 'admin') navigate(`/admin/${response.data.username}`);
      else if (response.data.role === 'faculty') navigate('/faculty');
      else if (response.data.role === 'student') navigate('/student');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-colors">
        <Home className="w-6 h-6 text-white" />
      </button>
      <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <LogIn className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-6">LogIn</h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your username" required />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your password" required />
                <button type="button" style={{height:'30px',marginTop:'30px'}} onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex bg-transparent items-center px-3 py-1 text-black">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              <button type="submit" disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            {error && <div className="mt-4 p-3 bg-red-500/20 text-red-200 rounded-lg">{error}</div>}
            
            {/* <div className="mt-6 text-center">
              <button onClick={() => navigate("/register")} className="text-white-400 hover:text-blue-300 transition-colors">
                Don't have an account? Register here
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
