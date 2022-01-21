import { MemoryRouter } from "react-router-dom";

import { shallow } from "enzyme";

import Task from "../Task.js";

it("renders without crashing", () => {
  shallow(
    <MemoryRouter>
      <Task />
    </MemoryRouter>
  );
});

// Providing testKey guarantees snapshot doesn't change from random generated key
it("matches snapshot", () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <Task />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
