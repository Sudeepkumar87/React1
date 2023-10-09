import React from "react";
import classes from "./Usage.module.css";
import Car from "./Assets/prop.png";
import line from "./Assets/line2.svg";
import prop from "./Assets/consump.png";
import consum from "./Assets/Custom.png";
import offer from "./Assets/offer.png";
import { useNavigate } from "react-router";

const Usage = () => {
  const navigate = useNavigate();
  const NextHandler = () => {
    navigate("/Plan");
  };
  const UsageHandler = [
    {
      Heading: "High Usage",
      Text: "Day time",
      Text1: "Evening",
      Text2: "All Day",
    },
    {
      Heading: "Type Of Heating",
      Text: "Comb",
      Text1: "Oil",
      Text2: "Electric",
      Text3: "Gas",
    },
    {
      Heading: "Central Heating",
      Text: "Yes",
      Text1: "No",
    },
    {
      Heading: "Solar PV",
      Text: "Yes",
      Text1: "No",
      Heading1: "Heat Pump",
      Text3: "Yes",
      Text4: "No",
    },
    {
      Heading: "Underfloor Heating",
      Text: "Yes",
      Text1: "No",
    },
    {
      Heading: "Hot Water Cylinder",
      Text: "Yes",
      Text1: "No",
    },
    {
      Heading: "Heated Pool",
      Text: "Yes",
      Text1: "No",
    },
  ];
  return (
    <section className={"container"}>
      <div className={classes.mainCont}>
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
        {/* <div>
          {UsageHandler.map((item) => (
            <ul>
              <div>
                <div>
                  <p>{item.Heading}</p>
                </div>
                <div>
                  <button>{item.Text}</button>
                  <button>{item.Text1}</button>
                  <button>{item.Text2}</button>
                  <button>{item.Text3}</button>
                </div>
                <div></div>
              </div>
            </ul>
          ))}
        </div> */}
        <div className={classes.mainGrid}>
          <div>
            <div>
              <p className={classes.mainHigh}>High Usage</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Day time</button>
              <button className={classes.innerButton}>Evening</button>
              <button className={classes.innerButton}>All Day</button>
            </div>
          </div>
          <div>
            <div>
              <p className={classes.mainHigh}>Underfloor Heating</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Yes</button>
              <button className={classes.innerButton}>No</button>
            </div>
          </div>
          <div>
            <div>
              <p className={classes.mainHigh}>Type Of Heating</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Comb</button>
              <button className={classes.innerButton}>Oil</button>
              <button className={classes.innerButton}>Electric</button>
              <button className={classes.innerButton}>Gas</button>
            </div>
          </div>
          <div>
            <div>
              <p className={classes.mainHigh}>Hot Water Cylinder</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Yes</button>
              <button className={classes.innerButton}>No</button>
            </div>
          </div>
          <div>
            <div>
              <p className={classes.mainHigh}>Central Heating</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Yes</button>
              <button className={classes.innerButton}>No</button>
            </div>
          </div>
          <div>
            <div>
              <p className={classes.mainHigh}>Heated Pool</p>
            </div>
            <div className={classes.mainetach}>
              <button className={classes.outerButton}>Yes</button>
              <button className={classes.innerButton}>No</button>
            </div>
          </div>
          <div className={classes.innerGrid}>
            <div>
              <div>
                <p className={classes.mainHigh}>Solar PV</p>
              </div>
              <div className={classes.mainetach}>
                <button className={classes.outerButton}>Yes</button>
                <button className={classes.innerButton}>No</button>
              </div>
            </div>
            <div>
              <div>
                <p className={classes.mainHigh}>Heat Pump</p>
              </div>
              <div className={classes.mainetach}>
                <button className={classes.outerButton}>Yes</button>
                <button className={classes.innerButton}>No</button>
              </div>
            </div>
          </div>
          <div className={classes.innerButt}>
            <button
              className={classes.mainButton}
              onClick={() => NextHandler()}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
