import React from "react";
import MainP from "./mainAbout";
import Newcar from "./aboutusAssets/Newcar.png";
import synergy from "./aboutusAssets/synergy.png";
import Lease from "./aboutusAssets/Lease.png";
import Leasing from "./aboutusAssets/Leasing.svg";
import willow from "./aboutusAssets/willow.png";
import UK from "./aboutusAssets/uk.png";
import Leasing1 from "./aboutusAssets/Leasing1.png";
import pink from "./aboutusAssets/pink.png";
import onto from "./aboutusAssets/ONTO.png";
import Drive from "./aboutusAssets/Drive.png";
import hippo from "./aboutusAssets/HIPPO.png";
import nation from "./aboutusAssets/nation.png";
import Intelligent from "./aboutusAssets/Intelligent.png";
import embrase from "./aboutusAssets/embrase.png";
import octopus from "./aboutusAssets/octopus.png";
import eonnext from "./aboutusAssets/eonnext.png";
import edf from "./aboutusAssets/EDF.png";
import ovoenergy from "./aboutusAssets/OVOENERGY.png";
import British from "./aboutusAssets/British.png";
import uk from "./aboutusAssets/uk.png";
import scottish from "./aboutusAssets/scottish.png";
import power from "./aboutusAssets/power.png";
import classes from "./Partner.module.css";
import Syner from "./aboutusAssets/Syner.png";
import Powe from "./aboutusAssets/Powe.png";
import Hous from "./aboutusAssets/Hous.png";
const partner = (props) => {
  const ElectricMain = [
    {
      mainP: "Electric Vehicle Retailers",
      innerP:
        "We partner with more than 20 different electric vehicle retailers in the UK market, bringing our customers the best deals & new offers from the entire market, giving our customers a comparative choice from a wide variety of options, so that they can select the right option suiting their needs",
    },
    {
      mainP: "Energy Retailers",
      innerP:
        "We partner with the leading UK energy suppliers, supplying 100% green energy, bringing our customers the very best deals for Home and EV charging tariffs along with best value export rates for giving surplus energy back to the Grid",
    },
    {
      mainP: "Renewables Solution Integrator",
      innerP:
        "We partner exclusively with PowerUp Houses to bring our customers the very best package deals of domestic solar PV including assets, installation, maintenance/ services & support plus tons of apps to make life easier and simpler, giving our homeowning customers a single solution with zero headache and peace-of-mind process",
    },
  ];
  const ElectricImg = [
    {
      Logo1: Newcar,
      Logo2: synergy,
      Logo3: Lease,
      Logo4: Leasing,
      Logo5: willow,
      Logo6: UK,
      Logo7: Leasing1,
      Logo8: pink,
      Logo9: onto,
      Logo10: Drive,
      Logo11: hippo,
      Logo12: nation,
      Logo13: Intelligent,
      Logo14: embrase,
    },
    {
      Logo15: octopus,
      Logo16: eonnext,
      Logo17: edf,
      Logo18: ovoenergy,
      Logo19: British,
      Logo20: uk,
      Logo21: scottish,
    },

    {
      Logo22: power,
    },
  ];
  const ElectricImg1 = [];
  return (
    <MainP>
      <div>
        <div>
          <p className={classes.mainPone}>
            Our <span className={classes.spanP}>Partners</span>{" "}
          </p>
        </div>
        <div>
          <div className={classes.flexContainer}>
            {ElectricMain.map((item) => (
              <div key={item.id} className={classes.mainRetail}>
                <div className={classes.outerText}>
                  <p className={classes.MainText}>{item.mainP}</p>
                  <p className={classes.Maintext}>{item.innerP}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          {ElectricImg.map((item) => (
            <ul>
              <div key={item.id}>
                <div className={classes.mainImage}>
                  <div className={classes.innImg}>
                    <img src={item.Logo1} />
                    <img src={item.Logo2} />
                    <img src={item.Logo3} />
                    <img src={item.Logo4} />
                    <img src={item.Logo5} />
                    <img src={item.Logo6} />
                    <img src={item.Logo7} />
                    <img src={item.Logo8} />
                    <img src={item.Logo9} />
                    <img src={item.Logo10} />
                    <img src={item.Logo11} />
                    <img src={item.Logo12} />
                    <img src={item.Logo13} />
                    <img src={item.Logo14} />
                  </div>
                  <div className={classes.innImg}>
                    <img src={item.Logo15} />
                    <img src={item.Logo16} />
                    <img src={item.Logo17} />
                    <img src={item.Logo18} />
                    <img src={item.Logo19} />
                    <img src={item.Logo20} />
                    <img src={item.Logo21} />
                  </div>
                  <div>
                    <img src={item.Logo22} />
                  </div>
                </div>
              </div>
            </ul>
          ))}
        </div> */}
        <div>
          <div className={classes.innImg}>
            <img src={Syner} className={classes.InterMain} />
            <img src={Powe} className={classes.InterInner} />
            <img src={Hous} className={classes.InterInner} />
          </div>
        </div>
      </div>
    </MainP>
  );
};

export default partner;
