import React from "react";

function Divideuti1(props) {
  return (
    <div className="mt-5 max-w-lg flex1 mx-auto bg-white shadow-2xl rounded-lg">
      <ul className="list-none divide-x-2 divide-red-600 divide-dotted flex">
        <li className="p-6 space-y-2 flex-1">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2 flex-1">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2 flex-1">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2 flex-1">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-500 rounded"></div>
        </li>
      </ul>
    </div>
  );
}

export default Divideuti1;
