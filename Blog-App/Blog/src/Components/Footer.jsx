import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    /*<footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/Agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/posts/categories/Business">Business</Link>
        </li>
        <li>
          <Link to="/posts/categories/Education">Education</Link>
        </li>
        <li>
          <Link to="/posts/categories/Entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/posts/categories/Art">Art</Link>
        </li>
        <li>
          <Link to="/posts/categories/Investment">Investment</Link>
        </li>
        <li>
          <Link to="/posts/categories/Uncategorized">Uncategorized</Link>
        </li>
        <li>
          <Link to="/posts/categories/Weather">Weather</Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All Right Reserved &copy;copyright, Harish</small>
      </div>
    </footer>*/
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">
          Features
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">
          Pricing
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">
          FAQs
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-body-secondary">
          About
        </a>
      </li>
    </ul>
  );
};

export default Footer;
