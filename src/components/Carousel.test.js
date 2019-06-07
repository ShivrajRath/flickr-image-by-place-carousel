import React from "react";
import { Carousel } from "./Carousel";
import { shallow } from "enzyme";
import Photo from "./Photo";

describe("<Carousel />", () => {
  describe("when no photos are present", () => {
    const props = {
      photos: [],
      currentPhotoIndex: 0
    };

    const wrapper = shallow(<Carousel {...props} />);

    it("should not display icons", () => {
      expect(wrapper.find(Photo).length).toEqual(0);
    });
  });

  describe("When photos are present", () => {
    const props = {
      photos: [{ id: 1 }, { id: 2 }],
      currentPhotoIndex: 1
    };

    const wrapper = shallow(<Carousel {...props} />);

    it("should display icons", () => {
      expect(wrapper.find(Photo).length).toEqual(2);
    });

    it("first photo should be hidden", () => {
      expect(
        wrapper
          .find(Photo)
          .at(0)
          .props().isVisible
      ).toBeFalsy();
    });

    it("second photo should be visible", () => {
      expect(
        wrapper
          .find(Photo)
          .at(1)
          .props().isVisible
      ).toBeTruthy();
    });
  });
});
