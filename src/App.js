import React, { useState } from "react";
import Divideuti from "./Divideuti";
import Divideuti1 from "./Divideuti1";
import Spacebw from "./Spacebw";
import Spacebw1 from "./Spacebw1";

function App() {
  const [page, setPage] = useState("space1");

  const layout1ButtonHandler = () => {
    setPage("space1");
  };

  const layout2ButtonHandler = () => {
    setPage("space2");
  };

  const layout3ButtonHandler = () => {
    setPage("divide1");
  };

  const layout4ButtonHandler = () => {
    setPage("divide2");
  };

  return (
    <div>
      <h1 className="text-white text-5xl text-center m-10">Tailwind</h1>
      <div className="flex justify-evenly">
        <button
          className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700"
          onClick={layout1ButtonHandler}
        >
          Layout 1
        </button>
        <button
          className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700"
          onClick={layout2ButtonHandler}
        >
          Layout 2
        </button>
        <button
          className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700"
          onClick={layout3ButtonHandler}
        >
          Layout 3
        </button>
        <button
          className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700"
          onClick={layout4ButtonHandler}
        >
          Layout 4
        </button>
      </div>
      {page === "space1" && <Spacebw />}
      {page === "space2" && <Spacebw1 />}
      {page === "divide1" && <Divideuti />}
      {page === "divide2" && <Divideuti1 />}
    </div>
  );
}
export default App;
