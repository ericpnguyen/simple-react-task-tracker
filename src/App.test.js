import { shallow } from "enzyme";

import App from "./App.js";

it("renders without crashing", () => {
  shallow(<App />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
