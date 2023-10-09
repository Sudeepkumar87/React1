import React from "react";
import classes from "./Kit.module.css";
import Arrow from "./Assets/Arrow.svg";
import East from "./Assets/East.png";
import East1 from "./Assets/East1.png";
import Earn from "./Assets/Earn.png";
import Earn1 from "./Assets/Earn1.png";
import Earn2 from "./Assets/Earn2.png";
import Solar from "./Assets/Solar.png";
import Solar1 from "./Assets/Solar1.png";
import Solar2 from "./Assets/Solar2.png";
import Solar3 from "./Assets/Solar3.png";
import Health from "./Assets/Health.png";
import co2 from "./Assets/co2.png";
import co21 from "./Assets/co21.png";
import co22 from "./Assets/co22.png";
import co23 from "./Assets/co23.png";
import { useNavigate } from "react-router";

const Kit = () => {
  const navigate = useNavigate();
  const designChange = () => {
    navigate("/Panel");
  };
  const chartHandler = [
    {
      text: "You saved",
      image: co2,
      para: "1,565 kg",
    },
    {
      text: "You saved",
      image: co21,
      para: "4 tons of Coal from burning",
    },
    {
      text: "You stopped",
      image: co22,
      para: "500 trees from being cut for fuel land",
    },
    {
      text: "You Took",
      image: co23,
      para: "8 cars off the road",
    },
  ];
  return (
    <section className={classes.mainSect}>
      <div>
        <div className={classes.mainHead}>
          <div className={classes.innerDiv}>
            <img src={Arrow} className={classes.imgArrow} />
            <p className={classes.ParaArrow}>Your House assessment</p>
          </div>
          <div className={classes.innerPassag}>
            <div>
              <p>Your PV Kit system summary</p>
            </div>
            <div>
              <button
                className={classes.mainbtn}
                onClick={() => designChange()}
              >
                Change your design
              </button>
            </div>
          </div>
        </div>
        <div className={classes.inertaldiv}>
          <button className={classes.inertalpara}>
            <p className={classes.nearDiv}>
              Our AI engine has detected the South-East facing roof as the ideal
              side for installation
            </p>
          </button>

          <button className={classes.inertalpara}>
            <p className={classes.nearDiv}>
              Our AI engine has detected the optimal configuration based on your
              energy needs
            </p>
          </button>
        </div>
        <div className={classes.mainSolar}>
          <div className={classes.mainFlex}>
            <img src={East} className={classes.mainEast} />
            <img src={East1} className={classes.mainEast1} />
            <img />
          </div>
          <div>
            <div className={classes.mainEarn}>
              <div>
                <p className={classes.mainElec}>Electricity Generation</p>
                <img src={Earn} className={classes.imgEarn} />
                <div className={classes.narrowmain}>
                  <p className={classes.innerPara}>£4500 kWh</p>
                  <p className={classes.innerPar}>/Year</p>
                </div>
              </div>
              <div>
                <p className={classes.mainElec}>
                  Savings from less electricity import
                </p>
                <img src={Earn1} className={classes.imgEarn} />
                <div className={classes.narrowInner}>
                  <p className={classes.innerPara}>£500</p>
                  <p className={classes.innerPar}>/Year</p>
                </div>
              </div>
              <div>
                <p className={classes.mainElec}>
                  Earnings from exporting excess
                </p>
                <img src={Earn2} className={classes.imgEarn} />
                <div className={classes.narrowInner}>
                  <p className={classes.innerPara}>£250</p>
                  <p className={classes.innerPar}>/Year</p>
                </div>
              </div>
            </div>
            <div className={classes.mainsolar}>
              <div className={classes.solarInner}>
                <div>
                  <img src={Solar} className={classes.imgSolar} />
                </div>
                <div>
                  <p className={classes.speedMain}>5kW/12 solar panels</p>
                  <p className={classes.speedInner}>Maximum system size</p>
                </div>
              </div>
              <div className={classes.solarInner}>
                <div>
                  <img src={Solar1} className={classes.imgSolar} />
                </div>
                <div>
                  <p className={classes.speedMain}>4 years</p>
                  <p className={classes.speedInner}>Payback Period</p>
                </div>
              </div>
              <div className={classes.solarInner}>
                <div>
                  <img src={Solar2} className={classes.imgSolar} />
                </div>
                <div>
                  <p className={classes.speedMain}>£2000-2500 Incl.VAT</p>
                  <p className={classes.speedInner}>
                    Estimated cost to purchase & Install
                  </p>
                </div>
              </div>
              <div className={classes.solarInner}>
                <div>
                  <img src={Solar3} className={classes.imgSolar} />
                </div>
                <div>
                  <p className={classes.speedMain}>38m /413 sq.ft</p>
                  <p className={classes.speedInner}>
                    Roof space suitable for solar pannel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.outerMap}>
          <div>
            <p className={classes.outerDiv}>
              Your contribution towards the planet
            </p>
          </div>
          <div>
            <ul className={classes.mainSaved}>
              {chartHandler.map((item) => (
                <div>
                  <div className={classes.innerMap}>
                    <p>{item.text}</p>
                    <img src={item.image} />
                    <p>{item.para}</p>
                  </div>
                </div>
              ))}
              <div>
                <img src={Health} className={classes.HealtImg} />
              </div>
            </ul>
          </div>
        </div>
        <div className={classes.offerbtn}>
          <button className={classes.innerBtn}>Check Your offers</button>
        </div>
      </div>
    </section>
  );
};

export default Kit;
