import React from "react";
import classes from "./Main.module.css";

const MainCart = (props) => {
  return (
    <>
      <div className={classes.mainCart}>{props.children}</div>
    </>
  );
};

export default MainCart;
