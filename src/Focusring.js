import React from "react";

function Focusring(props) {
  return (
    <div className="max-w-4xl mt-5 mx-auto space-x-4 flex justify-center bg-white w-auto p-10">
      <button className="focus:outline-none focus:ring-1 focus:ring-pink-700 bg-red-400 text-red-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-red-300">
        Hey, focus!
      </button>
      <button className="focus:outline-none focus:ring-2 focus:ring-pink-700 bg-pink-500 text-pink-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-pink-300">
        Look at me
      </button>
      <button className="focus:outline-none focus:ring focus:ring-pink-700 bg-indigo-400 text-indigo-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-indigo-300">
        I am shiny
      </button>
      <button className="focus:outline-none focus:ring-4 focus:ring-pink-700 bg-green-400 text-green-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-green-300">
        Pick me!
      </button>
      <button className="focus:outline-none focus:ring-8 focus:ring-pink-700 bg-blue-500 text-blue-800 font-medium tracking-wide px-4 py-2 rounded-md hover:bg-blue-300">
        Watch this
      </button>
    </div>
  );
}

export default Focusring;
