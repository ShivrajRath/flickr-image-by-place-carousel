import React from "react";
import { Search } from "./Search";
import { mount } from "enzyme";

describe("<Search />", () => {
  describe("with place", () => {
    const props = {
      fetchPlaceImages: jest.fn(),
      startLoading: jest.fn(),
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);
    component.setState({ place: "London" });

    it("on submit press fetch places images should be called", () => {
      component.find("form").simulate("submit");
      expect(props.fetchPlaceImages).toHaveBeenCalledWith("London", 1);
      expect(props.startLoading).toHaveBeenCalled();
      component.unmount();
    });
  });

  describe("without place", () => {
    const props = {
      fetchPlaceImages: jest.fn(),
      startLoading: jest.fn(),
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);
    it("on submit press fetch places images should not be called", () => {
      component.find("form").simulate("submit");
      expect(props.fetchPlaceImages).not.toHaveBeenCalled();
      expect(props.startLoading).not.toHaveBeenCalled();
      component.unmount();
    });
  });

  describe("with same place", () => {
    const props = {
      fetchPlaceImages: jest.fn(),
      startLoading: jest.fn(),
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);
    component.setState({ place: "seattle" });

    it("should not call the fetch image if state matches place on app state", () => {
      component.find("form").simulate("submit");
      expect(props.fetchPlaceImages).not.toHaveBeenCalled();
      expect(props.startLoading).not.toHaveBeenCalled();
      component.unmount();
    });
  });

  describe("set place on prop", () => {
    const props = {
      fetchPlaceImages: jest.fn(),
      startLoading: jest.fn(),
      place: "Seattle"
    };
    const component = mount(<Search {...props} />);

    it("should set place on prop", () => {
      component
        .find("input")
        .simulate("change", { target: { name: "place", value: "seattle" } });
      expect(component.state("place")).toEqual("seattle");
      component.unmount();
    });
  });
});
