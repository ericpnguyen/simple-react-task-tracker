import { MemoryRouter } from "react-router-dom";

import { mount, shallow } from "enzyme";

import Footer from "../Footer.js";

it("renders without crashing", () => {
  shallow(<Footer />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});

it("includes link to about", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  expect(wrapper.find(".footer-link").at(0).props().to).toBe("/about");
});
