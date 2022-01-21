import { MemoryRouter } from "react-router-dom";

import { shallow } from "enzyme";

import Header from "../Header.js";

it("renders without crashing", () => {
  shallow(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

// Providing testKey guarantees snapshot doesn't change from random generated key
it("matches snapshot", () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
      <Header />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
