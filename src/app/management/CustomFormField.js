import React from "react";

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ({ name, value, disabled, action }) => (
  <div className="form-group">
    <label htmlFor={value}>{capitalizeFirstLetter(name)}</label>
    <input
      value={value}
      disabled={disabled}
      className="form-control"
      onChange={action}
    />
  </div>
);
