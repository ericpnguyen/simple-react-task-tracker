import { useLocation } from "react-router-dom";
import Button from "./Button.js";

const Header = ({ title, onAdd, showAdd }) => {
  // If the About component is displayed do not show the add task button
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "burlywood" : "steelblue"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
