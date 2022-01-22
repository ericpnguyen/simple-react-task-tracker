import { shallow } from "enzyme";

import App from "./App.js";

it("passes by default", () => {
  expect(true).toBe(true);
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
