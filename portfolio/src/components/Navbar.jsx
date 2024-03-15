import React from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
