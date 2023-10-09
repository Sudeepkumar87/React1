import React from "react";
import classes from "./Owner.module.css";

const Owner = () => {
  return (
    <section className={classes.mainDeals}>
      <div>
        <div className={classes.mainText1}>
          <p className={classes.innerPass}>
            Compare <span className={classes.mainSpan}>PV deals</span>
          </p>
        </div>
        <div className={classes.HeadMain}>
          <div className={classes.outerDiv}>
            <div>
              <p className={classes.maiPassa}>Q1:</p>
            </div>
            <div>
              <p className={classes.maiPassa}>
                You are a home-owner AND don’t live in a conservation listing
                building AND your roof is not fully covered with extensive
                shading from trees or obstructions?
              </p>
            </div>
          </div>
          <div>
            <div className={classes.mainButton}>
              <button className={classes.innerButton}>Yes</button>
              <button className={classes.outerButton}>No</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mainCart}>
        <p className={classes.cartPass}>
          Sorry we cannot provide PV for your home at this time
        </p>
        <button className={classes.cartButton}>BACK TO CART</button>
      </div>
    </section>
  );
};

export default Owner;
