import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
//import { FaBars } from "react-icons/fa";
//import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container nav__container">
      <Link to="/" className="nav__logo">
        <img src={Logo} alt="Navbar Logo"></img>

        {/* <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use> */}
      </Link>

      <ul class="nav__menu">
        <li class="nav-item">
          <Link to="#" class="nav-link active" aria-current="page">
            Erenest Achiever
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link">
            Create Post
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link">
            Authors
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="nav-link">
            Logout
          </Link>
        </li>
      </ul>
      <button className="nav__toggle-btn"></button>
    </div>
  );
};

export default Header;
