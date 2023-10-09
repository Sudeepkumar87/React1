import React from "react";
import { useNavigate } from "react-router";
import classes from "./Tarrif.module.css";
import Back from "./assets/Back.svg";
import car from "./assets/car.svg";
import line from "./assets/line.svg";
import property from "./assets/property.svg";
import consump from "./assets/consump.svg";
import offer from "./assets/offer.svg";
import Audi from "./assets/Audi.png";

const Tarrif = () => {
  const navigate = useNavigate();

  const gotoNext = () => {
    navigate("/Property");
  };
  return (
    <section className={"container"}>
      <div>
        <div className={classes.mainHead}>
          <img src={Back} className={classes.innnerImg} />
          <p className={classes.mainPara}>
            <span className={classes.spanMain}>SAVE MONEY</span> on your{" "}
            <span className={classes.spanMain}>HOME ENERGY BILLS</span> with
            Electric Vehicle Home Energy Tariffs
          </p>
        </div>
        <div className={classes.imgmain}>
          <img src={car} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={property} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={consump} className={classes.mainimg} />
          <img src={line} className={classes.mainimg} />
          <img src={offer} className={classes.mainimg} />
        </div>
        <div>
          <p className={classes.mainBrand}>Choose your Electric Vehicle</p>
        </div>
        <div className={classes.carModal}>
          <div>
            <label for="star" className={classes.mainBill}>
              Car Brand
            </label>
            <select
              to="star"
              className={`form-select ${classes.mainSelect}`}
              aria-label="Default select example"
            >
              {" "}
              <option selected>Audi</option>{" "}
            </select>
            <label for="star" className={classes.mainBill}>
              Car Model
            </label>
            <select
              to="star"
              class="form-select "
              aria-label="Default select example"
            >
              {" "}
              <option selected>A5</option>{" "}
            </select>
          </div>
          <div className={classes.mainAudi}>
            <img src={Audi} className={classes.AudiImage} />
          </div>
        </div>

        <div className={classes.mainRough}>
          <p>Roughly how many miles do you drive per year?</p>
        </div>
        <div className={classes.mainMiles}>
          <div className={classes.inputMain}>
            <input
              type="Text"
              id="Text"
              placeholder="Enter Miles"
              className={classes.mainInput}
            />
          </div>
          <div className={classes.innerbutton}>
            <button className={classes.mainButton} onClick={() => gotoNext()}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarrif;
