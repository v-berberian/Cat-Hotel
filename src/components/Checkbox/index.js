import React from "react";

const Checkbox = ({ children, ...props }) => {
  return (
    <label>
      <input className="checkbox" type="checkbox" {...props} />
      {children}
    </label>
  );
};

export default Checkbox;
