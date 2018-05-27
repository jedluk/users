import React from "react";

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ({ name, value, disabled, action }) => {
  const trueName = name.split(".").slice(-1).pop();
  return (
    <div className="form-group">
      <label htmlFor={value}>{capitalizeFirstLetter(trueName)}</label>
      <input
        name={name}
        value={value}
        disabled={disabled}
        className="form-control"
        onChange={action}
      />
    </div>
  );
};
