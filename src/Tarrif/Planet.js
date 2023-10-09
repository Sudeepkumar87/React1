import React from "react";
import classes from "./Planet.module.css";
import Back from "./Back.svg";

const Planet = () => {
  return (
    <section>
      <div>
        <div className={classes.mainSection}>
          <img src={Back} />
          <p className={classes.mainP}>
            Your EV Tariff <span className={classes.mainSpan}>quotes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Planet;
