import React from "react";
import classes from "./Number.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consump.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import pen from "./Assets/pen.svg";
import { useNavigate } from "react-router";

const Number = () => {
  const navigate = useNavigate();
  const gotoNext = () => {
    navigate("/Detach");
  };
  return (
    <section className={"container"}>
      <div>
        <div className={classes.compMain}>
          <p>
            <span className={classes.mainSpan}>Great!</span> Please answer a few
            questions about your property and consumption to access your needs
          </p>
        </div>
        <div className={classes.mainNum}>
          <p className={classes.NumbColor}>Your Property</p>
          <p>Your consumption</p>
          <p>Design your custom PV Kit</p>
          <p>Your offers</p>
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
            <div className={classes.MainLabel}>
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
            </div>
            <div>
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

export default Number;
