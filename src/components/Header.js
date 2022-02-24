import { useLocation } from "react-router-dom";
import Button from "./CustomButton";

const Header = ({ toggleShowAddTask, btnText }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Task Tracker </h1>
      {location.pathname === "/" && (
        <Button
          handleClick={toggleShowAddTask}
          otherColors={btnText ? "red" : "green"}
          children={btnText ? "Close" : "Create Task"}
        />
      )}
    </header>
  );
};

export default Header;
