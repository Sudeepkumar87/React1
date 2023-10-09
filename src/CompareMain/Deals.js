import React from "react";
import classes from "./Deals.module.css";
import { useNavigate } from "react-router";

const Deals = () => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate("/Owner");
  };
  const goNext = () => {
    navigate("/Number");
  };

  return (
    <section className={classes.mainDeals}>
      <div>
        <div className={classes.mainText1}>
          <p className={classes.mainText}>
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
              <button className={classes.innerButton} onClick={() => goNext()}>
                Yes
              </button>
              <button
                className={classes.innerButton}
                onClick={() => gotoNext()}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
