import React from "react";
import classes from "./mainFooter.module.css";

const Footer = (props) => {
  return (
    <>
      <div className={classes["main-Footer"]}>{props.children}</div>
    </>
  );
};

export default Footer;
