import React from "react";
import Photo from "./Photo";
import { shallow } from "enzyme";

describe("<Photo />", () => {
  describe("Hidden Photo", () => {
    const props = {
      photo: { url: "test_url", title: "test_title" },
      isVisible: false
    };

    const wrapper = shallow(<Photo {...props} />);

    it("should have hidden class", () => {
      expect(wrapper.find("figure").hasClass("current")).toBeFalsy();
      expect(wrapper.find("figure").hasClass("hidden")).toBeTruthy();
    });
  });

  describe("Visible Photo", () => {
    const props = {
      photo: {
        url: "test_url",
        title: "test_title",
        lowResURL: "test_low_res_url"
      },
      isVisible: true
    };

    const wrapper = shallow(<Photo {...props} />);

    it("should have current class", () => {
      expect(wrapper.find("figure").hasClass("hidden")).toBeFalsy();
      expect(wrapper.find("figure").hasClass("current")).toBeTruthy();
    });

    it("image should have url and alt", () => {
      expect(wrapper.find("img").prop("src")).toEqual("test_low_res_url");
      expect(wrapper.find("img").prop("alt")).toEqual("test_title");
    });

    it("fig caption should have title text", () => {
      expect(wrapper.find("figcaption").text()).toEqual("test_title");
    });
  });

  describe("Empty title", () => {
    const props = {
      photo: { url: "test_url", title: "", lowResURL: "test_low_res_url" },
      isVisible: true
    };

    const wrapper = shallow(<Photo {...props} />);

    it("figcaption should have class hide", () => {
      expect(wrapper.find("figcaption").hasClass("hide")).toBeTruthy();
    });
  });
});
