import React from "react";
import classes from "./mainAbout.module.css";

const MainAbout = (props) => {
  return (
    <>
      <div className={classes.colorAbout}>{props.children}</div>
    </>
  );
};

export default MainAbout;
