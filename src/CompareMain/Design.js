import React from "react";
import classes from "./Design.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consu.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import { useNavigate } from "react-router";

const Design = () => {
  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Cost");
  };
  return (
    <section className={`container ${classes.mainCont}`}>
      <div>
        <div className={classes.mainNum}>
          <p className={classes.NumbColor}>Your Property</p>
          <p>Your consumption</p>
          <p>Design your custom PV Kit</p>
          <p>Your offers</p>
        </div>
        <div className={classes.imgmain}>
          <img src={Car} className={classes.mainimg} />

          <img src={line} className={classes.mainimg} />
          <img src={prop} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={consum} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={offer} className={classes.mainimg} />
        </div>
        <div className={classes.mainPattern}>
          <div className={classes.innerPatter}>
            <p>Q1:</p>
            <p>
              Do you have an electric vehicle or do you intend to get one soon?
            </p>
          </div>
          <div className={classes.innerBut}>
            <button className={classes.mainButt}>Yes</button>
            <button className={classes.mainButt} onClick={() => NextHandler()}>
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
