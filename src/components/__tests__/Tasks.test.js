import { MemoryRouter } from "react-router-dom";

import { shallow } from "enzyme";

import Tasks from "../Tasks.js";

it("renders without crashing", () => {
  shallow(
    <MemoryRouter>
      <Tasks />
    </MemoryRouter>
  );
});

// Providing testKey guarantees snapshot doesn't change from random generated key
it("matches snapshot", () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <Tasks />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
