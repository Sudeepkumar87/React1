import React from "react";
import tick from "./InfoAssets/tick.svg";
import MainInfo from "./mainInfo";
import classes from "./Grants.module.css";

const Grants = () => {
  const panelsGrants = [
    {
      image: tick,
      text: "Solar panels cost 25% less than they did in 2014",
    },
    {
      image: tick,
      text: "The Smart Export Guarantee can now pay solar panel owners",
    },
    {
      image: tick,
      text: "Solar panels can cut your energy bills by up to 50%",
    },
  ];
  return (
    <MainInfo>
      <div className={classes.GovernMain}>
        <div>
          <p className={classes.mainHeading}>
            Government<span className={classes.mainSpan}>Grants</span>{" "}
          </p>
          <p className={classes.mainBox}>
            Can You Get Free Solar Panels and Solar Panel Grants in 2021?
          </p>
        </div>
        <div>
          {panelsGrants.map((item) => (
            <div className={classes.grantsMap}>
              <img src={item.image} className={classes.mainImage} />
              <p className={classes.mainText}>{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <p className={classes.grantsMain}>
            The sunlight-absorbing magic of solar panels has captured the hearts
            and minds of eco-conscious homeowners up and down the country.
          </p>
          <p className={classes.grantsMain}>
            More than 970,000 UK homes have solar panels, according to the
            government’s 2020 report, and that number is set to keep rising.
          </p>
          <p className={classes.grantsMain}>
            Prices have dropped by a massive 25% since 2014, so there truly has
            never been a cheaper time to buy domestic solar panels.
          </p>
          <p className={classes.grantsMain}>
            Unfortunately, there are no solar panels grants and no way of
            getting free solar panels in 2020. However, the future of solar is
            still bright.
          </p>
          <p className={classes.grantsMain}>
            {" "}
            The Smart Export Guarantee launched in January 2020, so it actually
            pays to switch to solar right now.
          </p>
          <p className={classes.grantsMain}>
            {" "}
            On this page, we’ll tell you all you need to know about the
            government’s solar panel initiatives (old and new), and explain why
            solar panels are still worth it.
          </p>{" "}
          <p className={classes.grantsMain}>
            Want to find out how much it’ll cost you to get a set of panels?
            Rather than scrolling through the internet to find out, compare
            solar panel prices with our easy-to-use tool.
          </p>
          <p className={classes.grantsMain}>
            {" "}
            Once you’ve filled out a few questions, we’ll get you in touch with
            our expert suppliers, who will send you free quotes to compare.
          </p>
        </div>
        <div>
          <p className={classes.mainBox}>
            Can I still get free solar panels in 2021?
          </p>
          <p className={classes.innerBox}>
            The short answer is no, unfortunately.
          </p>
          <p className={classes.shorterGrants}>
            {" "}
            t’s hard to believe that, back in 2010 when the Feed-in Tariff
            began, companies would literally buy your solar panels for you.
            They’d put them on your roof, you’d benefit from the energy bill
            savings (and all that eco-friendly electricity), and they’d earn all
            the money from the Feed-in Tariff. It was an efficient system, but
            the 64% reduction in Feed-in Tariff payments in 2016 hurt the
            initiative, and it was shut down in 2019.
          </p>
        </div>
      </div>
    </MainInfo>
  );
};

export default Grants;
