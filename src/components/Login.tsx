import React, { useState } from 'react';

interface LoginProps {
  setCurrentPage: (page: string) => void;
  handleLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ setCurrentPage, handleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Here you would typically send the form data to a server for authentication
    handleLogin();
    setCurrentPage('home');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login / Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded transform hover:scale-105 transition-transform"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded transform hover:scale-105 transition-transform"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors transform hover:scale-105"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <a
            href="#"
            onClick={() => setCurrentPage('signup')}
            className="text-purple-600 hover:text-purple-800 transform hover:scale-105 inline-block"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;