import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Defining default properties on Spinner function
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
