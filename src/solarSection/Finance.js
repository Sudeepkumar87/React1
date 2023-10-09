import React from "react";
import Main from "./mainSolar";
import classes from "./Finance.module.css";
import one from "./solarAssets/one.png";
import two from "./solarAssets/two.png";
import three from "./solarAssets/three.png";
import FCA from "./solarAssets/FCA.png";
import solar from "./solarAssets/solar.png";
import price from "./solarAssets/price.png";

const Finance = () => {
  const numberPara = [
    {
      number: one,
      Maintext: "Find your perfect Solar Solution",
      text: "Browse our wide range of Solar Panel and Solar PV Packages. Get in touch with our Green Team and start your Solar Journey.",
    },
    {
      number: two,
      Maintext: "Choose your Deal",
      text: "Explore your options with your dedicated Energy advisor and together apply for finance.",
    },
    {
      number: three,
      Maintext: "Get Approved",
      text: "Sign the dotted line, and choose your installation date. Ready to Plug Into The Sun.",
    },
  ];
  const solarPara = [
    {
      number: one,
      maintext: "Affordable",
      textMain:
        "APR from as low as 9.9% representative. With our affordable monthly repayment plans anyone can go solar. With the complete flexibility to pay additional payments when you want through our unsecured loan!",
    },
    {
      number: two,
      maintext: "Convenient",
      textMain:
        "Borrow Up to £50,000 for your dream Solar PV System. Get A decision within minutes, as to whether you are eligible through our easy online application. We do all the work for you, one phone call is all it takes!",
    },
    {
      number: three,
      maintext: "Peace of Mind",
      textMain:
        "Install A Solar Panel System with Zero Deposit! Spread the cost of your Solar PV Installation Over 120 payments and Keep Your Savings. Gain additional consumer protection under S75 of the Consumer Credit Act.",
    },
  ];
  return (
    <Main>
      <div className={"container"}>
        <div>
          <p className={classes.mainHeader}>
            Solar<span className={classes.spanHeader}>Finance</span>{" "}
          </p>
          <p className={classes.mainContainer}>PLUG INTO THE SUN</p>
        </div>
        <div>
          <p className={classes.middleHeader}>
            We've Made Financing Solar Simple!
          </p>
          <p className={classes.mainPara}>
            In our efforts to make Solar Energy both affordable and accessible
            to all. The team at Deege Solar are now offering Solar Panel
            Finance. So that every home can be a green home.
          </p>
        </div>
        <div>
          <p className={classes.outerHead}>So What Does that Mean?</p>
          <p className={classes.outerPara}>
            With Solar Panel Financing you can receive 100% finance on all Deege
            Solar services! Pay off your Green Energy products monthly (Over 10
            years) with no penalty for early repayment.
          </p>
          <p className={classes.outerPara}>
            Our Solar Panel finance options give you the chance to go green
            without having to pay the up-front price. As FCA approved vendors,
            our customers are guaranteed to receive a fair and honest deal! You
            can choose from a variety of our monthly payment options. As we’re a
            finance broker not a lender, we’ll always be committed to finding
            you the most competitive deal available.
          </p>
          <button className={classes.outerButton}>ENQUIRE NOW</button>
        </div>
        <div className={classes.mainNumber}>
          <div>
            <p className={classes.mainContainer}>SOLAR MADE SIMPLE</p>
            <p className={classes.mainTaxt}>How It Works</p>
          </div>
          <div>
            <ul className={classes.NameText}>
              {numberPara.map((item) => (
                <div>
                  <div>
                    <img src={item.number} className={classes.mainImg} />
                  </div>
                  <div>
                    <p className={classes.paraText}>{item.Maintext}</p>
                    <p className={classes.mainText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.mainFCA}>
          <div>
            <p className={classes.FCAtext}>FCA Approved</p>
            <p className={classes.FCApara}>
              Deege Solar has partnered with one of the UK’s leading financial
              institutions, to offer competitive finance for solar panels along
              with our other services. Our affordable solar panel loans, means
              that home owners can take advantage of the latest Solar PV
              technologies to reduce their bills up to 70%! To find out if you
              are eligible for Solar finance, fill out our enquiry form today.
            </p>
            <button className={classes.FCAbutton}>AM I ELIGIBLE?</button>
          </div>
          <div>
            <img src={FCA} className={classes.FCAimag} />
          </div>
        </div>
        <div className={classes.innerAfford}>
          <div>
            <p className={classes.mainContainer}>SOLAR MADE AFFORDABLE</p>
            <p className={classes.mainTaxt}>Why Finance Your Solar</p>
          </div>
          <div>
            <ul className={classes.mainAffort}>
              {solarPara.map((item) => (
                <div className={classes.outerDolar}>
                  <img src={item.number} className={classes.mainImg} />
                  <p className={classes.outerafford}>{item.maintext}</p>
                  <p className={classes.innerafford}>{item.textMain}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.innerHome}>
          <div>
            <p className={classes.FCAtext1}>
              Solar Energy from just £107.63 a Month
            </p>
            <div className={classes.innerClock}>
              <div>
                <img src={solar} className={classes.solarImg} />
              </div>
              <div>
                <button className={classes.innerbutton}>
                  <p className={classes.innerP}>FROM </p>
                  <p className={classes.innerP}>£248.09</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Finance;
