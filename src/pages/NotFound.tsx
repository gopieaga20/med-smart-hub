
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-doctor-light-gray">
      <div className="text-center max-w-md p-6">
        <h1 className="text-5xl font-bold text-doctor-purple mb-4">404</h1>
        <p className="text-xl text-doctor-dark mb-6">We couldn't find the page you were looking for</p>
        <Link 
          to="/" 
          className="bg-doctor-purple text-white px-6 py-2 rounded-lg hover:bg-doctor-purple/90 transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
