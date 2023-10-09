import React from "react";
import classes from "./MainHeader.module.css";
import Map from "./NavbarAssets/Map.png";
import { Link } from "react-router-dom";
import Mobile1 from "./NavbarAssets/Mobile1.png";
import Mobile2 from "./NavbarAssets/Mobile2.png";
import Mobile3 from "./NavbarAssets/Mobile3.png";
import Mobile4 from "./NavbarAssets/Mobile4.png";
import star4 from "./NavbarAssets/star.svg";

const MainHeader = () => {
  const mainPaymentData = [
    {
      image: star4,
      text: "Find charging stations",
    },
    {
      image: star4,
      text: "Charge via the single app",
    },
    {
      image: star4,
      text: "Pay using a single/multiple account",
    },
    {
      image: star4,
      text: "Peer-to-peer charging via sharing your charger to the public",
    },
  ];
  const AppData = [
    {
      image: star4,
      text: "Paypal, credit card, top-up or voucher",
    },
    {
      image: star4,
      text: "Payment managed by fleet manager/Employer, corporate account",
    },
  ];
  const MilesData = [
    {
      text: "EVPVgo will provide free charging on limited EV offers by topping up the EVPVgo app with limited free miles credit",
    },
    {
      text: "Upto 5000 miles free charging miles/ annum",
    },
  ];
  const imageMobile = [
    {
      image: Mobile1,
    },
    {
      image: Mobile2,
    },
    {
      image: Mobile3,
    },
    {
      image: Mobile4,
    },
  ];
  return (
    <section className={classes.sectionMain}>
      <div className={classes.innerHeadExt}>
        <div className={classes.ExtraHeader}>
          <p className={classes.Appmain}>The App can</p>
          <div>
            <ul>
              {mainPaymentData.map((item) => (
                <div className={classes.DatOuter}>
                  <img src={item.image} className={classes.imgMap} />
                  <p className={classes.passagMap}>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
          <hr className={classes.mainHrtag} />
          <div>
            <div>
              <p className={classes.Appmain}>Payments</p>
            </div>
            <ul>
              {AppData.map((item) => (
                <div className={classes.DatOuter}>
                  <img src={item.image} className={classes.imgMap} />
                  <p className={classes.passagMap}>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className={classes.mainmap}>
            <div className={classes.innermap}>
              <img src={Map} className={classes.mapimage} />
              <p className={classes.mainpara}>
                In partnership with ZAPMAP, EVPVgo offers a single app to charge
                EV at any Charge Point Operator in the UK
              </p>
            </div>
          </div>
          <div className={classes.innerplus}>
            <div className={classes.mainplus}>
              <button to="#" className={classes.btnColor}>
                <p className={classes.mainTextp}>PLUS</p>
                <p className={classes.mainTextpone}>Free charging Miles</p>
              </button>
              <div>
                <ul>
                  {MilesData.map((item) => (
                    <div>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mainMob}>
          <ul className={classes.mapMob}>
            {imageMobile.map((item) => (
              <div>
                <img src={item.image} className={classes.mobmapImg} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
