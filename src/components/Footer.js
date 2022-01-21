import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link className="footer-link" to="/about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
