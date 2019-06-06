import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Search from "./components/Search";

const wrapper = shallow(<App />);

describe("<App />", () => {
  it("renders three <Search /> component", () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });
});
