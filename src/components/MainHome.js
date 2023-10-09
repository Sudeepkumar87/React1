import React from "react";
import classes from "./MainHome.module.css";

const Main = (props) => {
  return (
    <>
      <div className={classes["main-color"]}>{props.children}</div>
    </>
  );
};

export default Main;
