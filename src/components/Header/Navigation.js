import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <nav className="nav nav_primary">
      <HashLink smooth to="/#why-us">
        <a href="/" className="nav__link">
          Почему мы?
        </a>
      </HashLink>
      <Link to="/products" className="nav__link">
        Номера
      </Link>
      <HashLink smooth to="/#reviews">
        <a href="/" className="nav__link">
          Отзывы
        </a>
      </HashLink>
      <HashLink smooth to="/#contact">
        <a href="/" className="nav__link">
          Как нас найти
        </a>
      </HashLink>
    </nav>
  );
};

export default Navigation;
