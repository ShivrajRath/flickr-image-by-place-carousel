import React from "react";
import "./App.css";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import IconContainer from "./components/IconContainer";
import Loader from "./components/Loader";
import Info from "./components/Info";
import WakeUpDyno from "./components/WakeUpDyno";

function App() {
  return (
    <React.Fragment>
      <WakeUpDyno />
      <Search />
      <Info />
      <Loader />
      <IconContainer />
      <Carousel />
    </React.Fragment>
  );
}

export default App;
