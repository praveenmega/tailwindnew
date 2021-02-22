import React from "react";

function Divideuti(props) {
  return (
    <div className="mt-5 mx-auto bg-white w-3/4 rounded-lg">
      <ul className="list-none divide-y-2 divide-red-600">
        <li className="p-6 space-y-2">
          <div className="h-3 w-48 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2">
          <div className="h-3 w-48 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2">
          <div className="h-3 w-48 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-500 rounded"></div>
        </li>
        <li className="p-6 space-y-2">
          <div className="h-3 w-48 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-500 rounded"></div>
        </li>
      </ul>
    </div>
  );
}

export default Divideuti;
