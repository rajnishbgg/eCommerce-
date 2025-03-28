import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
