import React, { useState } from "react"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email format!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              id="remember"
              type="checkbox"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
