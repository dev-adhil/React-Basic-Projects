import React from "react";
import ReactDOM from "react-dom/client";
import Haeder from "./components/Header.js";
import Body from "./components/Body.js";



const AppLayout = () => {
  return (
    <div className="app">
      <Haeder />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
