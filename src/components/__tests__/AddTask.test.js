import React from "react";

import { mount, shallow } from "enzyme";

import AddTask from "../AddTask.js";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  shallow(<AddTask />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<AddTask />);
  expect(wrapper).toMatchSnapshot();
});

// it("uses on submit", () => {
//   const winAlert = window.alert; // remember alert
//   window.alert = () => {};

//   const wrapper = mount(<AddTask />);
//   console.log(AddTask.prototype);
//   const spy = jest.spyOn(AddTask.prototype, "onSubmit");

//   wrapper.simulate("submit");

//   expect(spy).toBeCalled();
//   window.alert = winAlert;
// });
