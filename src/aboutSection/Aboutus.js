import React from "react";
import EVPV from "./aboutusAssets/EVPV.png";
import classes from "./Aboutus.module.css";
import star from "./aboutusAssets/star.svg";
const Aboutus = () => {
  const mainElectric = [
    {
      image: star,
      text: "Electric Vehicle (EV) comparison offers",
    },
    {
      image: star,
      text: "Home Energy Tariff comparison offers and most uniquely",
    },
    {
      image: star,
      text: "comprehensive domestic renewables energy generation kit comparison offers as well including full installation of the assets with peace-of-mind support & services via our exclusive partner",
      text1: "PowerUp Houses.",
    },
  ];
  return (
    <div className={"container"}>
      <div className={classes.innerPassag}>
        <p className={classes.mainP}>
          Who are <span className={classes.mainSpan}>EVPVgo?</span>
        </p>
      </div>
      <div className={classes.colorAbout}>
        <div className={classes.mainEvpgo}>
          <img src={EVPV} className={classes.EVPVimg} />
        </div>
        <div>
          <p className={classes.innerP}>
            Founded in 2021, EVPVgo is UK’s No.1 comparative website for
            Electric Vehicles (Evs) + Solar Photovoltaic PVs + Home Energy
            Tarrifs
          </p>
        </div>
      </div>

      <div className={classes.borderMain}>
        <div>
          <p className={classes.innerOuter}>
            We are UK’s 1st ONE STOP VENDOR, providing a 3-in-1 package
          </p>
        </div>
        <ul>
          {mainElectric.map((item) => (
            <div>
              <div className={classes.innerMap}>
                <img src={item.image} />
                <p className={classes.mainpassag}>{item.text}</p>
                <div>
                  <p className={classes.spanPage}>{item.text1}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className={classes.innerPassage}>
        <p className={classes.outerPassage}>
          We are not like the traditional comparative sites who just offer you
          the prices from the market, in-fact we are a complete solution
          provider. It means that we will not only give you the best deals and
          offers from the market but we will get the entire package delivered,
          installed and commissioned for you so that you don’t have to worry
          about a thing!
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
