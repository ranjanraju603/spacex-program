import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';


import Login from "./index";
describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", {
        target: { name: "username", value: "raju@gmail.com" },
      });
    expect(wrapper.state("username")).toEqual("raju@gmail.com");
  });
  it("password check", () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="password"]')
      .simulate("change", {
        target: { name: "password", value: "12345" },
      });
    expect(wrapper.state("password")).toEqual("12345");
  });
  it("login check with right data", () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", {
        target: { name: "username", value: "raju@gmail.com" },
      });
    wrapper
      .find('input[type="password"]')
      .simulate("change", {
        target: { name: "password", value: "12345" },
      });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(true);
  });
  it("login check with wrong data", () => {
    wrapper = shallow(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", {
        target: { name: "username", value: "raju@gmail.com" },
      });
    wrapper
      .find('input[type="password"]')
      .simulate("change", {
        target: { name: "password", value: "12345" },
      });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(false);
  });
});
