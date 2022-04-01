import React from "react";
import { BrowserRouter , Link ,Route } from "react-router-dom";

import NavBar from "./components/Nav";
import Header from "./components/header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Route exact path="/" component={Header} ></Route>
     <Route path="/pizza" component={Form}></Route>
    </>
  );
};
export default App;
