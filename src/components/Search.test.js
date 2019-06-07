import React from "react";
import { Search } from "./Search";
import { mount } from "enzyme";

describe("<Search />", () => {
  describe("with place", () => {
    const fetchPlaceImages = jest.fn();
    const props = {
      fetchPlaceImages: fetchPlaceImages,
      place: ""
    };
    const component = mount(<Search {...props} />);
    component.setState({ place: "Seattle" });

    it("on submit press fetch places images should be called", () => {
      component.find("form").simulate("submit");
      expect(fetchPlaceImages).toHaveBeenCalled();
      component.unmount();
    });
  });

  describe("without place", () => {
    const fetchPlaceImages = jest.fn();
    const props = {
      fetchPlaceImages: fetchPlaceImages,
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);

    it("on submit press fetch places images should not be called", () => {
      component.find("form").simulate("submit");
      expect(fetchPlaceImages).not.toHaveBeenCalled();
      component.unmount();
    });
  });

  describe("with same place", () => {
    const props = {
      fetchPlaceImages: jest.fn(),
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);
    component.setState({ place: "seattle" });

    it("should not call the fetch image if state matches place on app state", () => {
      component.find("form").simulate("submit");
      expect(props.fetchPlaceImages).not.toHaveBeenCalled();
      component.unmount();
    });
  });
});
