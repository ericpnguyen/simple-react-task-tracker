import React from "react";

import { mount, shallow } from "enzyme";

import AddTask from "../AddTask.js";

it("renders without crashing", () => {
  shallow(<AddTask />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<AddTask />);
  expect(wrapper).toMatchSnapshot();
});

test("alert window with empty text field", () => {
  const winAlert = window.alert; // remember alert
  window.alert = () => {};
  const wrapper = mount(<AddTask />);
  const spy = jest.spyOn(window, "alert");

  wrapper.simulate("submit");
  expect(spy).toBeCalledTimes(1);

  window.alert = winAlert;
});

test("onAdd called with populated text field", () => {
  const onAdd = jest.fn();
  const wrapper = mount(<AddTask onAdd={onAdd} />);
  wrapper
    .find("input")
    .first()
    .simulate("change", { target: { type: "text", value: "test" } });

  wrapper.simulate("submit");

  expect(onAdd).toBeCalledTimes(1);
});
