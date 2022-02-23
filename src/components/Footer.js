import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year, setYear] = React.useState("");
  React.useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer>
      <Link to="/about">About</Link>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
