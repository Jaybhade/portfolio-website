import React from "react";

const Tag = (props) => {
  return (
    <span
      style={{
        padding: "5px",
        borderRadius: "4px",
        backgroundColor: "#1F2235",
        color: "white",
        marginRight: "15px",
      }}
    >
      {props.children}
    </span>
  );
};

export default Tag;
