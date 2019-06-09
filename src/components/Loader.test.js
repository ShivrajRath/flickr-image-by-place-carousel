import React from "react";
import { Loader } from "./Loader";
import { shallow } from "enzyme";

describe("<Loader />", () => {
  describe("Loading", () => {
    const props = { isLoading: true };
    const wrapper = shallow(<Loader {...props} />);

    it("should have loader class", () => {
      expect(wrapper.find(".loader")).toBeTruthy();
    });
  });

  describe("Not Loading", () => {
    const props = { isLoading: false };
    const wrapper = shallow(<Loader {...props} />);

    it("should not have loader class", () => {
      expect(wrapper.html()).toEqual("");
    });
  });
});
