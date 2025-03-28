import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      <Link to="/login" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Go to Login
      </Link>
    </div>
  );
};

export default Home;
