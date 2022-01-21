import { Link } from "react-router-dom";

const About = () => {
  return (
    <div data-testid="about">
      <h4>Version 1.0.1</h4>
      <Link className="about-link" to="/">
        Go back
      </Link>
    </div>
  );
};

export default About;
