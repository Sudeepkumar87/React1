import React from "react";
import classes from "./Property.module.css";
import { useNavigate } from "react-router";
import Car from "./assets/Car1.svg";
import line from "./assets/line.svg";
import prop from "./assets/Prop.svg";
import consum from "./assets/consump.svg";
import offer from "./assets/offer.svg";
import pen from "./assets/pen.svg";

const Property = () => {
  const navigate = useNavigate();

  const gotoNext = () => {
    navigate("/Change");
  };
  return (
    <section className={"container"}>
      <div>
        <div className={classes.compMain}>
          <p>
            Compare <span className={classes.spanMain}>EV Tariff</span>
          </p>
        </div>
        <div className={classes.imgmain}>
          <img src={Car} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={prop} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={consum} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={offer} className={classes.mainimg} />
        </div>
        <div>
          <p className={classes.mainBrand}>Find your address</p>
        </div>
        <div className={classes.carModal}>
          <div className={classes.innerCar}>
            <label for="star" className={classes.mainBill}>
              House name or Number
            </label>
            <select
              to="star"
              className={`form-select ${classes.mainSelect}`}
              aria-label="Default select example"
            >
              {" "}
              <option selected>House 24, 2nd Street...</option>{" "}
            </select>
            <label for="star" className={classes.mainBill}>
              Postcode
            </label>
            <select
              to="star"
              class="form-select "
              aria-label="Default select example"
            >
              {" "}
              <option selected>284JA7</option>{" "}
            </select>
          </div>
          <div>
            <div className={classes.outerPara}>
              <p>74 Aldermoor lane, conventry, west Midlands, CV31JY</p>
              <img src={pen} />
            </div>
          </div>
        </div>
        <div className={classes.innerButt}>
          <button className={classes.mainButton} onClick={() => gotoNext()}>
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Property;
