import React from "react";
import { BrowserRouter , Link ,Route } from "react-router-dom";

import NavBar from "./components/Nav";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
     
    </>
  );
};
export default App;
