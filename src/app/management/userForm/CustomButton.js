import React from "react";

export default ({ faclass, btnText, action, load }) => {
  let btnColor = "bg-success";
  if (btnText.toLowerCase().includes("add")) {
    btnColor = "bg-primary";
  } else if (btnText.toLowerCase().includes("delete")) {
    btnColor = "bg-danger";
  }

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
