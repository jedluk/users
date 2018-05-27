import React from "react";

const deduceColor = (btnText) => {
  let color = "bg-success";
  if (btnText.toLowerCase().includes("add")) {
    color = "bg-primary";
  } else if (btnText.toLowerCase().includes("delete")) {
    color = "bg-danger";
  }
  return color;
}

export default ({ faclass, btnText, action, load }) => {
  let btnColor = deduceColor(btnText);
  return (
    <div
      className={`card text-center text-white mb-3 pointer ${btnColor}`}
      onClick={action}
    >
      <div className={`card-body ${btnColor}`}>
        <h3>{btnText} </h3>
        <h1>
          <i className={faclass} />{" "}
        </h1>
      </div>
    </div>
  );
};
