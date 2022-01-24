import { shallow } from "enzyme";

import Button from "../Button.js";

it("renders without crashing", () => {
  shallow(<Button />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper).toMatchSnapshot();
});

it("calls click callback function", () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Button onClick={onClick} />);

  wrapper.simulate("click");

  expect(onClick).toBeCalledTimes(1);
});
