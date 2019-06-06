import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Search from "./components/Search";
import IconContainer from "./components/IconContainer";
import Carousel from "./components/Carousel";

const wrapper = shallow(<App />);

describe("<App />", () => {
  it("renders one <Search /> component", () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });

  it("renders one <IconContainer /> component", () => {
    expect(wrapper.find(IconContainer).length).toEqual(1);
  });

  it("renders one <Carousel /> component", () => {
    expect(wrapper.find(Carousel).length).toEqual(1);
  });
});
