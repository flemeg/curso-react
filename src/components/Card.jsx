import React from "react";

export default props => {
  return (
    <div key={props.key} className="pure-u-1-3" >
      <h3>{props.title}</h3>
      <h4>{props.value}</h4>
    </div>
  );
};
