import React from "react";
import classes from "./Planet.module.css";
import Back from "./Back.svg";
import light from "./assets/light.png";
import save from "./assets/save.png";
import save1 from "./assets/save1.png";
import save2 from "./assets/save2.png";
import tick from "./assets/tick.png";
import flat from "./assets/flat.png";
import tick1 from "./assets/tick1.png";
import add from "./assets/add.png";
import add1 from "./assets/add1.png";

const Planet = () => {
  const saveHandler = [
    {
      image: save,
      Head: "Save Money",
      Text: "Using smart EV tariffs & charging at designated times of low rate you lower your overall energy bills for EV charging",
    },
    {
      image: save1,
      Head: "Zero headache",
      Text: "Most EV tariff offers include EV chargers that comes with installation at discounted prices, so that you don’t have to arrange it separately",
    },
    {
      image: save2,
      Head: "Suited to your needs",
      Text: "Using our 2 profiles you can decide the best option for you, based on your charging habits and travelling needs",
    },
  ];
  const numberHandler = [
    {
      number: "1",
      Text: "What is EV Tariff?",
    },
    {
      number: "2",
      Text: "What is Smart Charging?",
    },
    {
      number: "3",
      Text: "What is Smart EV Charger?",
    },
    {
      number: "4",
      Text: "What is required for home EV charging?",
    },
    {
      number: "5",
      Text: "How do you save on energy bills?",
    },
    {
      number: "6",
      Text: "How do you help grid and planet?",
    },
  ];
  return (
    <section className={"container"}>
      <div>
        <div className={classes.mainSection}>
          <img src={Back} />
          <p className={classes.mainP}>
            Your EV Tariff <span className={classes.mainSpan}>quotes</span>
          </p>
        </div>
        <div className={classes.mainGrid}>
          <div className={classes.helpHead}>
            <div>
              <img src={light} className={classes.mainLight} />
            </div>
            <div>
              <p className={classes.mainHelp}>Help the Grid & the Planet</p>
              <p className={classes.innerHelp}>
                Charging at designed times during nights and weekends & at times
                when supply is high and demand is low, helps the Grid maintain
                the balance, reduces the upgrade to the electricity
                infrastructure and reduces unnecessary fossil fuel burning,
                keeping the planet clean and healthy .
              </p>
            </div>
          </div>
          <div className={classes.TarrifMain}>
            <div>
              <p className={classes.mainHelp}>Why EV Tariffs?</p>
            </div>
            <div>
              <ul>
                {saveHandler.map((item) => (
                  <div className={classes.mainTarrif}>
                    <div>
                      <img src={item.image} className={classes.tarrifImg} />
                    </div>
                    <div>
                      <p className={classes.TarrifHead}>{item.Head}</p>
                      <p className={classes.TarrifText}>{item.Text}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.mainthings}>
            <div>
              <p className={classes.mainabout}>
                6 things you should now about EV Tariffs
              </p>
            </div>
            <div>
              <ul>
                {numberHandler.map((item) => (
                  <div className={classes.numberMain}>
                    <p className={classes.numberItem}>{item.number}</p>
                    <p className={classes.TextNumber}>{item.Text}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.bestHead}>
          <div className={classes.outerTick}>
            <div>
              <img src={tick} className={classes.tickImg} />
            </div>
            <div className={classes.outerFlat}>
              <img src={flat} className={classes.imgFlat} />
            </div>
            <div>
              <p className={classes.mainWeek}>
                Best offers if you are mainly charging at home during nights &
                weekends
              </p>
            </div>
          </div>
          <div className={classes.innerTick}>
            <div>
              <img src={tick1} className={classes.tickImg} />
            </div>
            <div className={classes.nextOuter}>
              <img src={flat} className={classes.imgFlat} />
              <img src={add} className={classes.imgadd} />
              <img src={add1} className={classes.imgadd1} />
            </div>
            <div>
              <p className={classes.innerWeek}>
                Best offers if you are charging at home but also frequently at
                public charge stations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planet;
