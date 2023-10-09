import React from "react";
import classes from "./Create.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consu.png";
import consum from "./Assets/Custm.png";
import offer from "./Assets/offer.png";
import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate();
  const NextButton = () => {
    navigate("/Map");
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
        <div>
          <p className={classes.mainPar}>
            Great! Thanks for answering those questions
          </p>
          <p className={classes.mainPas}>
            Now, lets create your own home solar PV system in a few clicks using
            our AI PV Kit Designer
          </p>
          <div className={classes.outerBut}>
            <button className={classes.extermain} onClick={() => NextButton()}>
              LET'S GO...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
