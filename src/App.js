import React from "react";
import "./App.css";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import IconContainer from "./components/IconContainer";
import Loader from "./components/Loader";

function App() {
  return (
    <React.Fragment>
      <Search />
      <Loader />
      <IconContainer />
      <Carousel />
    </React.Fragment>
  );
}

export default App;
