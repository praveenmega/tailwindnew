import React from "react";

function Focusring(props) {
  return (
    <div className="mt-5 mx-auto flex justify-evenly bg-white p-10">
      <button className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-opacity-50 focus:ring-red-500 bg-red-400 text-red-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-red-300">
        Hey, focus!
      </button>
      <button className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-opacity-50 focus:ring-pink-600 bg-pink-500 text-pink-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-pink-300">
        Look at me
      </button>
      <button className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-opacity-50 focus:ring-indigo-500 bg-indigo-400 text-indigo-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-indigo-300">
        I am shiny
      </button>
      <button className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-opacity-50 focus:ring-green-500 bg-green-400 text-green-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-green-300">
        Pick me!
      </button>
      <button className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-opacity-50 focus:ring-blue-600 bg-blue-500 text-blue-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-blue-300">
        Watch this
      </button>
    </div>
  );
}

export default Focusring;
