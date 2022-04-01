import React from "react";
import { BrowserRouter , Link ,Route } from "react-router-dom";

import NavBar from "./components/Nav";


const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Link to="/">home</Link>
      <Link to="/pizza">pizza</Link>
    </>
  );
};
export default App;
