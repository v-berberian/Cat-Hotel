import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img className="logo__image" src="/images/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
