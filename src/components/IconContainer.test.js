import React from "react";
import { IconContainer } from "./IconContainer";
import { shallow } from "enzyme";
import MoveIcon from "./MoveIcon";

describe("<IconContainer />", () => {
  describe("when no photos are present", () => {
    const props = {
      photos: []
    };

    const wrapper = shallow(<IconContainer {...props} />);

    it("should not display icons", () => {
      expect(wrapper.find(MoveIcon).length).toEqual(0);
    });
  });

  describe("When photos are present", () => {
    const props = {
      photos: [{}]
    };

    const wrapper = shallow(<IconContainer {...props} />);

    it("should display have icon-container", () => {
      expect(wrapper.find(".icon-container")).toBeTruthy();
    });

    it("should display icons", () => {
      expect(wrapper.find(MoveIcon).length).toEqual(2);
    });
  });
});
