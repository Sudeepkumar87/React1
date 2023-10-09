import React from "react";
import classes from "./Break.module.css";
import peter from "./Assets/peter.png";
import peter1 from "./Assets/Peter1.png";

const Break = () => {
  const paymentHandler = [
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
    {
      text: "Initial Payment",
      text1: "£ 1242 Incl.VAT (12 Months)",
    },
  ];
  return (
    <section className={"container"}>
      <div>
        <div>
          <p className={classes.mainBreak}>
            {" "}
            <span className={classes.spanBreak}>Deals</span> Breakdown
          </p>
        </div>
        <div className={classes.mainMap}>
          <div>
            <ul>
              {paymentHandler.map((item) => (
                <div className={classes.mainPayment}>
                  <p className={classes.mainText}>{item.text}</p>
                  <p>{item.text1}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div className={classes.callMain}>
              <div>
                <p className={classes.mainToday}>Call us Today</p>
                <p>029 420 8521</p>
              </div>
              <div>
                <button className={classes.mainCall}>CALL US</button>
              </div>
            </div>
            <div>
              <p className={classes.mainOpen}>Opening Hours</p>
              <p className={classes.mainFrid}>
                Monday to Friday 9am - 7pm, Sat: 10am - 1pm, Sun:
              </p>
              <p className={classes.mainClose}>Closed</p>
            </div>
            <div>
              <p className={classes.mainCal}>
                Cal is will be changed at your standard network rate (Inc
                additional changes)
              </p>
              <p className={classes.mainClose}>This HUNDAI IQNIQ 5</p>
              <p className={classes.mainClose}>
                E- Hatch 100kw Ev 50kwh Sense Plus Auto is brought to you by
                peter vardy Leasing
              </p>
            </div>
            <div className={classes.imgPeter}>
              <img src={peter} className={classes.peterImg} />
              <p className={classes.kmMain}>4.5</p>
              <img src={peter1} className={classes.petImg} />
            </div>
          </div>
        </div>
        <div className={classes.internalMain}>
          <button className={classes.outerClose}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default Break;
