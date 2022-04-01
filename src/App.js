import React from "react";
import { BrowserRouter , Link ,Route } from "react-router-dom";

import NavBar from "./components/Nav";
import Header from "./components/header";
import Form from "./components/Form";
import ThankYou from "./components/thankyou";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Route exact path="/" component={Header} ></Route>
     <Route exact path="/pizza" component={Form}></Route>
     <Route path='/pizza/result' component={ThankYou}></Route>
    </>
  );
};
export default App;
