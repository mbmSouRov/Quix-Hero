import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="lg:m-20 md:m-10 m-5">
      <p className="text-6xl text-purple-700 font-light">404</p>
      <p>This page does not Exist</p>
      <button className="mt-10 border-gray-700 border-2 p-2 rounded-lg text-white bg-purple-600 hover:bg-purple-900">
        <Link to="/home">Back To Homepage</Link>
      </button>
    </div>
  );
};

export default Error404;
