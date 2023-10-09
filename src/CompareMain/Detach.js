import React from "react";
import classes from "./Detach.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consump.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import Detac from "./Assets/05.png";
import Detach1 from "./Assets/03.png";
import { useNavigate } from "react-router";

const Detach = () => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate("/Roof");
  };
  return (
    <section className={"container"}>
      <div className={classes.mainCont}>
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
        <div className={classes.mainProp}>
          <div>
            <p className={classes.mainPassag}>Type Of Property</p>
          </div>
          <div className={classes.mainetach}>
            <div className={classes.innerDetac}>
              <img src={Detac} className={classes.imgDetac} />
              <p>Detached</p>
            </div>
            <div className={classes.inneDetac}>
              <img src={Detach1} className={classes.imgDetac} />
              <p>Semi-Detached</p>
            </div>
            <div className={classes.inneDetac}>
              <img src={Detach1} className={classes.imgDetac} />
              <p>Terraced</p>
            </div>
          </div>
        </div>
        <div className={classes.innerButt}>
          <button className={classes.mainButton} onClick={() => gotoNext()}>
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Detach;
