import React from "react";
import { MoveIcon } from "./MoveIcon";
import { shallow } from "enzyme";

describe("<MoveIcon />", () => {
  const getProps = () => ({
    isPrev: true,
    isNext: true,
    nextImage: jest.fn(),
    prevImage: jest.fn(),
    addToCarousel: jest.fn(),
    photos: [{}, {}],
    place: "",
    pagesFetched: 0,
    currentPhotoIndex: 0,
    totalPages: 2
  });

  describe("Next test", () => {
    const props = getProps();

    const wrapper = shallow(<MoveIcon {...props} />);

    it("should have next icon", () => {
      expect(wrapper.find("span").html()).toEqual(`<span>►</span>`);
    });
  });

  describe("Prev test", () => {
    const props = { ...getProps(), isPrev: true, isNext: false };

    const wrapper = shallow(<MoveIcon {...props} />);

    it("should have prev icon", () => {
      expect(wrapper.find("span").html()).toEqual(`<span>◄</span>`);
    });

    it("should call prev method", () => {
      wrapper.find("div").simulate("click");
      expect(props.prevImage).toHaveBeenCalled();
    });
  });

  describe("should call next", () => {
    const props = { ...getProps(), isPrev: false, isNext: true };

    const wrapper = shallow(<MoveIcon {...props} />);

    it("should call next method", () => {
      wrapper.find("div").simulate("click");
      expect(props.nextImage).toHaveBeenCalled();
      expect(props.addToCarousel).toHaveBeenCalled();
    });
  });

  describe("should not add to carousel", () => {
    it("when all pages are fetched", () => {
      const props = {
        ...getProps(),
        isPrev: false,
        isNext: true,
        pagesFetched: 2
      };

      const wrapper = shallow(<MoveIcon {...props} />);

      wrapper.find("div").simulate("click");
      expect(props.nextImage).toHaveBeenCalled();
      expect(props.addToCarousel).not.toHaveBeenCalled();
    });

    it("when 5 photos are pending", () => {
      const props = {
        ...getProps(),
        isPrev: false,
        isNext: true,
        photos: [{}, {}, {}, {}, {}, {}]
      };

      const wrapper = shallow(<MoveIcon {...props} />);

      wrapper.find("div").simulate("click");
      expect(props.nextImage).toHaveBeenCalled();
      expect(props.addToCarousel).not.toHaveBeenCalled();
    });
  });
});
