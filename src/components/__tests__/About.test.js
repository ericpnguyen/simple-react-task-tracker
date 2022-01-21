import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";

import { shallow, mount } from "enzyme";

import About from "../About.js";

// Unmounts React trees from DOM after each test. Unnecessary with enzyme shallow
afterEach(() => {
  cleanup();
});

it("renders about component that includes version", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const aboutElement = screen.getByTestId("about");
  expect(aboutElement).toBeInTheDocument();
  expect(screen.getByText("Version 1.0.1")).toBeInTheDocument();
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* ENZYME TESTS */

it("renders without crashing", () => {
  shallow(<About />);
});

it("matches snapshot", () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
});

it("includes link to home", () => {
  const wrapper = mount(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  expect(wrapper.find(".about-link").at(0).props().to).toBe("/");
});
