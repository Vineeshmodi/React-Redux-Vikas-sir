import React from "react";
import "./app.css";

import Headercontainer from "./containers/Headercontainer";

import HomeContainer from "./containers/HomeContainer";
const App = () => {
  return (
    <>
      {" "}
      <Headercontainer />
      <HomeContainer />
    </>
  );
};

export default App;
