import React from "react";

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center h-[200px] bg-gray-900">
      <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-r-md hover:from-yellow-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
