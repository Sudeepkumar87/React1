import React from "react";
import classes from "./Plan.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consump.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import { useNavigate } from "react-router";
import light from "./Assets/light.png";
import light1 from "./Assets/light1.png";
import pen from "./Assets/Pen.png";
import clip from "./Assets/clip.png";
import Elec from "./Assets/Elec.png";

const Plan = () => {
  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Design");
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
          <p className={classes.mainPara}>Your Energy consumption summary</p>
        </div>
        <div className={classes.mainGrid}>
          <div>
            <div>
              <img src={light} />
            </div>
            <div className={classes.interBack}>
              <div className={classes.mainPen}>
                <p>Change Address</p>
                <img src={pen} className={classes.imgPen} />
              </div>
              <div className={classes.mainPlan}>
                <p>Tarif:</p>
                <p>Standard Online</p>
              </div>
              <div className={classes.mainPlan}>
                <p>Payment Plan:</p>
                <p>Monthly Direct Debit</p>
              </div>
              <div className={classes.mainClip}>
                <img src={clip} className={classes.clipImg} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={light1} />
            </div>
            <div className={classes.interBack}>
              <div className={classes.mainPen}>
                <p>Current Annual Usage</p>
                <img src={pen} className={classes.imgPen} />
              </div>
              <div className={classes.mainPlan}>
                <p>Plan:</p>
                <p>Single Usage</p>
              </div>
              <div className={classes.mainPlan}>
                <div>
                  <img src={Elec} className={classes.mainElec} />
                </div>
                <div className={classes.mainTric}>
                  <p className={classes.innerP}> Electricity</p>
                  <p className={classes.innerP}>4142</p>
                  <p className={classes.innerP}>Kwh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.innerButt}>
          <button className={classes.mainButton} onClick={() => NextHandler()}>
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plan;
