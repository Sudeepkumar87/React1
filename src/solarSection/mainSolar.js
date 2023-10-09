import React from "react";
import classes from "./mainSolar.module.css";

const Main = (props) => {
  return (
    <>
      <div className={classes["back-Main"]}>{props.children}</div>
    </>
  );
};

export default Main;
