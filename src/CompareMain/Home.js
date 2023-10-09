import React from "react";
import { useNavigate } from "react-router";
import classes from "./Home.module.css";
import Home1 from "./Assets/Home1.png";

const Home = () => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate("/Deals");
  };
  return (
    <section className={classes.mainSect}>
      <div className={classes.mainHome}>
        <div>
          <img src={Home1} className={classes.imgMain} />
        </div>
        <div className={classes.innerSect}>
          <p className={classes.mainHead}>Home EV Energy Tariff Quotes</p>
          <div className={classes.mainFlex}>
            <div>
              <p className={classes.Flexpara}>Q:</p>
            </div>
            <div>
              <p className={classes.Flexpara}>
                Would you like to{" "}
                <span className={classes.mainSpan}> SAVE MONEY</span> on your{" "}
                <span span className={classes.mainSpan}>
                  HOME ENERGY BILLS{" "}
                </span>
                with EV Home Energy Tariffs, bundled with EV charger and Public
                charging discounts?
              </p>
            </div>
          </div>
          <div>
            <div className={classes.mainButton}>
              <button className={classes.innerButton}>Yes</button>
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

export default Home;
