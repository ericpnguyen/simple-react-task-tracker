import { shallow } from "enzyme";

import AddTask from "../AddTask.js";

it("renders without crashing", () => {
  shallow(<AddTask />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<AddTask />);
  expect(wrapper).toMatchSnapshot();
});
