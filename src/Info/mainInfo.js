import React from "react";
import classes from "./mainInfo.module.css";

const MainInfo = (props) => {
  return (
    <>
      <div className={classes["back-Main"]}>{props.children}</div>
    </>
  );
};

export default MainInfo;
