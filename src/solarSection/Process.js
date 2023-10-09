import React from "react";
import classes from "./Process.module.css";
import circle from "./solarAssets/circle.svg";
import circle1 from "./solarAssets/circle1.svg";
import circle2 from "./solarAssets/circle2.svg";
import circle3 from "./solarAssets/circle3.svg";
import circle4 from "./solarAssets/circle4.svg";
import circle5 from "./solarAssets/circle5.svg";
import line from "./solarAssets/line.svg";

const Process = () => {
  return (
    <section className={"container"}>
      <div>
        <div>
          <p className={classes.mainInstall}>
            Installation <span className={classes.mainSpan}>Process</span>
          </p>
        </div>
        <div className={classes.mainGrid}>
          <div className={classes.innerHead}>
            <p className={classes.innerPara}>
              Customer send pictures of site, meter etc to our back-office and
              our back-office confirms the design or any changes & dispatches
              the order
            </p>
          </div>
          <div className={classes.outHead}>
            <p className={classes.outPara}>
              Customer confirms goods receipt at site; Scaffolder installs the
              scaffolding a day before installation engineer arrives
            </p>
          </div>
        </div>
        <div className={classes.mainFlex}>
          <img src={circle} className={classes.mainImg} />

          <img src={line} className={classes.mainline} />

          <img src={circle1} className={classes.mainImg} />

          <img src={line} className={classes.mainline} />
          <img src={circle2} className={classes.mainImg} />

          <img src={line} className={classes.mainline} />
          <img src={circle3} className={classes.mainImg} />
          <img src={line} className={classes.mainline} />
          <img src={circle4} className={classes.mainImg} />
          <img src={line} className={classes.mainline} />
          <img src={circle5} className={classes.maingroup} />
        </div>
        <div className={classes.innerGrid}>
          <div className={classes.mainHead}>
            <p className={classes.mainPara}>
              After online purchase, customer downloads PowerUp Connect App &
              enters order pin code & app shows all details of order and
              progress
            </p>
          </div>
          <div className={classes.tracksHead}>
            <p className={classes.trackspara}>
              Customer tracks delivery of goods, plus confirms installation
              dates via “PowerUp” app
            </p>
          </div>

          <div className={classes.cirlcleHead}>
            <p className={classes.cirlclepara}>
              Next day Installer team arrives and commissions the project,
              registers the assets with DNO and activates the “PowerUp” app for
              full services and trains the customer on app use
            </p>
          </div>
          <div className={classes.Headinner}>
            <p className={classes.parainner}>
              Going forward all services, maintenance support, live chat, news,
              recommendations, analytics etc will be via the ”PowerUp” app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
