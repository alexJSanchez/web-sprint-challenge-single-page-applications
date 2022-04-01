import React from "react";
import { BrowserRouter , Link ,Route } from "react-router-dom";

import navBar from "./components/Nav";


const App = () => {
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/pizza">pizza</Link>
    </>
  );
};
export default App;
