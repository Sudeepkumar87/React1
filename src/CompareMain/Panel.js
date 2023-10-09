import React from "react";
import classes from "./Panel.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consu.png";
import consum from "./Assets/Custom1.png";
import offer from "./Assets/offer.png";
import { useNavigate } from "react-router";
import Horizon from "./Assets/Horizon.png";
import vert from "./Assets/vert.png";
import blank from "./Assets/Blank.png";
import Ten from "./Assets/Ten.png";
import one from "./Assets/One.png";
import two from "./Assets/Two.png";
import three from "./Assets/three.png";

const Panel = () => {
  const navigate = useNavigate();
  const Nextbtn = () => {
    navigate("/Offer");
  };
  return (
    <section className={`container ${classes.mainCont}`}>
      <div>
        <div className={classes.mainNum}>
          <p className={classes.NumbColor}>Your Property</p>
          <p className={classes.NumbColor}>Your consumption</p>
          <p className={classes.NumbColor}>Design your custom PV Kit</p>
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
        <div className={classes.uppersect}>
          <div>
            <div className={classes.mainReject}>
              <p className={classes.mainR1}>Solar PV Panels</p>
              <p className={classes.mainR2}>Addition</p>
              <img src={Horizon} className={classes.imgHorizon} />
              <img src={vert} className={classes.imgorizon} />
              <p className={classes.mainR3}>Add panels</p>
              <p>Drag & drop the panels to your roof</p>
              <p className={classes.mainR3}>Remove panels</p>
              <p>Remove panels</p>
            </div>
          </div>
          <div>
            <div className={classes.buttonout}>
              <button className={classes.buttonouter}>
                Our AI engine has detected the South-East facing roof as the
                ideal side for installation and the recommended number of PV
                panels to suit your energy needs
              </button>
            </div>
            <div className={classes.blankMain}>
              <img src={blank} className={classes.blankImg} />
            </div>
          </div>
          <div>
            <div className={classes.mainTen}>
              <div>
                <p className={classes.mainAdd}>
                  Add additional panels by dragging the panels from the left
                  hand side to your roof top
                </p>
              </div>
              <div className={classes.mainNumb}>
                <p className={classes.mainparaTen}>Number of Panels</p>
                <img src={Ten} className={classes.mainImgTen} />
              </div>
            </div>
            <div className={classes.imgOne}>
              <img src={one} className={classes.imgone} />
              <img src={two} className={classes.imgone} />
            </div>
            <div>
              <img src={three} className={classes.imgtwo} />
            </div>
            <div>
              <p className={classes.mainCheck}>Lets check some offers</p>
              <div className={classes.secondmain}>
                <button className={classes.secondbtn} onClick={() => Nextbtn()}>
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
