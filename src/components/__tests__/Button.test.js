import { shallow } from "enzyme";

import Button from "../Button.js";

it("renders without crashing", () => {
  shallow(<Button />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});
