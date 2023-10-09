import React from "react";
import { useNavigate } from "react-router";
import classes from "./Change.module.css";
import Car from "./assets/Car1.svg";
import line from "./assets/line.svg";
import prop from "./assets/Prop.svg";
import consump from "./assets/consum.svg";
import offer from "./assets/offer.svg";
import light from "./assets/light.svg";
import Pen from "./assets/Pen1.svg";
import Flow from "./assets/Flow.png";
import elec from "./assets/Plug.png";

const Change = () => {
  const navigate = useNavigate();

  const gotoNext = () => {
    navigate("/Planet");
  };
  return (
    <section className={"container"}>
      <div className={classes.mainChange}>
        <div className={classes.compMain}>
          <p>
            Compare <span className={classes.spanMain}>EV Tariff</span>
          </p>
        </div>
        <div className={classes.imgmain}>
          <img src={Car} className={classes.mainimg} />

          <img src={line} className={classes.mainimg} />
          <img src={prop} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={consump} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={offer} className={classes.mainimg} />
        </div>
        <div className={classes.gridinner}>
          <div>
            <div>
              <div>
                <img src={light} className={classes.mainLight} />
              </div>
              <div className={classes.outerAddr}>
                <div className={classes.addMain}>
                  <p>Change Address</p>
                  <img src={Pen} />
                </div>
                <div className={classes.innerTarrif}>
                  <p>Tarif:</p>
                  <p>Standard Online</p>
                </div>
                <div className={classes.mainPlan}>
                  <p>Payment Plan:</p>
                  <p>Monthly Direct Debit</p>
                </div>
                <div className={classes.flowOut}>
                  <img src={Flow} className={classes.outerFlow} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.innerCurr}>
              <img src={light} className={classes.malight} />
              <p className={classes.maText}>Current</p>
            </div>
            <div className={classes.outerAddr}>
              <div className={classes.addMain}>
                <p>Annual Electricity Usage</p>
                <img src={Pen} />
              </div>
              <div className={classes.innerStand}>
                <div>
                  <img src={elec} className={classes.elecMain} />
                </div>
                <div>
                  <p>Electricity</p>
                  <p className={classes.tricityInner}>4142</p>
                  <p>Kwh</p>
                </div>
              </div>
              <div className={classes.mainCost}>
                <div className={classes.innerOut}>
                  <p className={classes.annualMain}>Annual Electricity Cost</p>
                  <img src={Pen} />
                </div>
                <div className={classes.mainDoller}>
                  <p className={classes.innerEuro}>£</p>
                  <p className={classes.innerEuro}>1250</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.innerCurr}>
              <img src={light} className={classes.malight} />
              <p>Estimated</p>
            </div>
            <div className={classes.outerAddr}>
              <div className={classes.addMain}>
                <p className={classes.mainRough}>
                  Roughly how many miles do you drive every year
                </p>
                <img src={Pen} />
              </div>
              <div className={classes.innerStand}>
                <div>
                  <img src={elec} />
                </div>
                <div>
                  <p>1500</p>
                  <p>Kwh</p>
                </div>
              </div>
            </div>
            <div className={classes.mainCost}>
              <div className={classes.innerOut}>
                <p className={classes.annualMain}>
                  Annual addition electricity Cost with EV
                </p>
              </div>
              <div className={classes.mainDoller}>
                <p className={classes.innerEuro}>£</p>
                <p className={classes.innerEuro}>350</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.innerButt}>
          <div className={classes.ButtonChar}>
            <p>Get best value EV tariffs</p>
          </div>
          <button className={classes.mainButton} onClick={() => gotoNext()}>
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Change;
