import React from "react";

function Spacebw(props) {
  return (
    <div className="p-10 min-h-screen flex justify-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 bg-indigo-400 h-4 w-40 rounded"></div>

        <div className="flex items-center space-x-6">
          <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Spacebw;
