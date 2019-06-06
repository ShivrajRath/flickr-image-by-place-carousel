import React from "react";
import "./App.css";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import IconContainer from "./components/IconContainer";

function App() {
  return (
    <div className="grid">
      <Search />
      <IconContainer />
      <Carousel />
    </div>
  );
}

export default App;
