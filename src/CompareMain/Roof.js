import React from "react";
import { useNavigate } from "react-router";
import classes from "./Roof.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consump.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import slate from "./Assets/Slate1.png";
import slate1 from "./Assets/slate2.png";
import slate2 from "./Assets/Slate3.png";
import slate3 from "./Assets/Slate4.png";
import slate4 from "./Assets/Slate5.png";
import slate5 from "./Assets/slate6.png";
import Flat from "./Assets/Flat.png";
import Flat1 from "./Assets/Flat1.png";
import Flat2 from "./Assets/Flat2.png";
import Flat3 from "./Assets/Flat3.png";
import Flat4 from "./Assets/Flat4.png";
import Flat5 from "./Assets/Flat5.png";

const Roof = () => {
  const navigate = useNavigate();
  const nextButton = () => {
    navigate("/Usage");
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
        <div className={classes.mainGrid}>
          <div className={classes.mainFlex}>
            <div className={classes.innerlex}>
              <img src={slate} className={classes.flexImg} />
              <p>Slate</p>
            </div>
            <div className={classes.innerFlex}>
              <img src={slate1} className={classes.flexImg} />
              <p>Plain Tile</p>
            </div>
            <div className={classes.innerFlex}>
              <img src={slate2} className={classes.flexImg} />
              <p>Composite Slate</p>
            </div>
            <div className={classes.innerFlex}>
              <img src={slate3} className={classes.flexImg} />
              <p>Pan Tile</p>
            </div>
            <div className={classes.innerFlex}>
              <img src={slate4} className={classes.flexImg} />
              <p>Concrete Slate</p>
            </div>
            <div className={classes.innerFlex}>
              <img src={slate5} className={classes.flexImg} />
              <p>Sheet Metal</p>
            </div>
          </div>
          <div className={classes.secondMain}>
            <div className={classes.secondInner}>
              <img src={Flat} className={classes.mainImage} />
              <p className={classes.maiText}>Flat</p>
            </div>
            <div className={classes.secondInner}>
              <img src={Flat1} className={classes.mainImage} />
              <p className={classes.maiText}>Easy</p>
            </div>
            <div className={classes.secondInner}>
              <img src={Flat2} className={classes.mainImage} />
              <p className={classes.maiText}>Moderate</p>
            </div>
            <div className={classes.secondInner}>
              <img src={Flat3} className={classes.mainImage} />
              <p className={classes.maiText}>Normal</p>
            </div>
            <div className={classes.secondInner}>
              <img src={Flat4} className={classes.mainImage} />
              <p className={classes.maiText}>Strong</p>
            </div>
            <div className={classes.secondInner}>
              <img src={Flat5} className={classes.mainImage} />
              <p className={classes.maiText}>Very Strong</p>
            </div>
          </div>
        </div>
        <div className={classes.innerButt}>
          <button className={classes.mainButton} onClick={() => nextButton()}>
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roof;
