import React from "react";
import star1 from "./InfoAssets/star.svg";
import MainInfo from "./mainInfo";
import classes from "./planning.module.css";

const planning = () => {
  const listedparagraph = [
    {
      image: star1,
      text: "Your house is a listed building",
    },
    {
      image: star1,
      text: "Your house is situated within a conservation area",
    },
  ];
  const listeparagraph = [
    {
      image: star1,
      text: "A solar array should not exceed the highest point of the roof (excluding any chimney)",
    },
    {
      image: star1,
      text: "Solar panels should not project more than 200mm off the edge of the roof",
    },
    {
      image: star1,
      text: "Once they are no longer used for generating electricity, the panels should be removed from the roof.",
    },
    {
      image: star1,
      text: "Solar panels must be fitted in a way that minimizes the change in appearance of the building and the area.",
    },
  ];
  const solarPara = [
    {
      image: star1,
      text: "The first standalone solar PV installation is considered Permitted Development. Beyond that, any additional units will require planning permission.",
    },
    {
      image: star1,
      text: "The solar panels must be sited in a way that least impacts the appearance of the area, and at least 5 meters from the edge of your property.",
    },
    {
      image: star1,
      text: "The system must not stand taller than 4m, and must not exceed an area 9m².",
    },
  ];

  return (
    <MainInfo>
      <div className={classes.mainSection}>
        <div>
          <p className={classes.mainHeader}>
            Planning<span className={classes.mainSpan}> Permission</span>
          </p>
          <p className={classes.mainPara}>
            Just like any other major home improvement, solar panels are only
            permitted for installation provided that certain requirements are
            met. These standards and regulations are in place to reduce the risk
            of your solar array becoming an issue or potential hazard further
            down the line.
          </p>
        </div>
        <div className={classes.devMain}>
          <div>
            <p className={classes.innerMain}>Permitted Developments</p>
            <p>
              In April 2008, solar panels were designated ‘Permitted
              Development’, meaning that planning permission is no longer
              necessary. The only exceptions to this are:
            </p>
            <div>
              {listedparagraph.map((item) => (
                <div className={classes.mainMap}>
                  <img src={item.image} />
                  <p className={classes.MapPara}>{item.text}</p>
                </div>
              ))}
            </div>
            <p>
              It is possible to receive planning permission in these cases, but
              this is at the discretion of your Local Planning Authority.
            </p>
            <p>
              Aside from this, solar panels are subject to normal building
              regulations, which involves checking that the roof can support the
              extra load – your MCS-certified installer will this check for you.
            </p>
          </div>
        </div>
        <div>
          <p className={classes.innerMain}>
            Rules for fitting Solar PV to your roof
          </p>
          <div>
            <ul>
              {listeparagraph.map((item) => (
                <div className={classes.mainMap}>
                  <img src={item.image} />
                  <p className={classes.MapPara}>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <p className={classes.innerMain}>
                If your solar installation is to be installed within your land
                but not attached to your house:
              </p>
            </div>
            <div>
              <ul>
                {solarPara.map((item) => (
                  <div className={classes.mainMap}>
                    <img src={item.image} />
                    <p className={classes.MapPara}>{item.text}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className={classes.innerMain}>Connecting to the Grid</p>
          <p>
            The Distribution Network Operator (DNO) must be notified about any
            installation of solar PV. Solar setups with a Declared Net Capacity
            (the estimated output of the installation after any losses through
            inverters and wiring etc.) of 3.68kW and below will be notified via
            G83/2 after the system has been commissioned. Anything larger than
            3.68kW must be through G59 notification before any installation work
            begins. The DNO must give permission for these larger systems to be
            installed.
          </p>
        </div>
        <div>
          <p className={classes.innerMain}>
            Do I need to check all this myself?
          </p>
          <p>
            It is for the MCS contractor to notify the DNO, not the customer. An
            MCS contractor will also confirm that your solar setup meets all the
            aforementioned requirements before the installation commences.
          </p>
          <p>
            There are further rules that apply for installing solar panels in
            Scotland; planning permission is required if they are to be
            installed onto the wall of a block of flats or on a flat roof.
            Contact your local planning office for more information if this
            applies to you.
          </p>
        </div>
        <div>
          <p className={classes.innerMain}>What we do</p>
          <p>
            If you have any more questions about planning permission for solar
            panels or you’d like a quote for a solar installation, we can help.
            Fill out our contact form with your details. One of our Technical
            Account Managers will soon be in touch to discuss your project,
            before putting together a proposal for you to review.
          </p>
        </div>
      </div>
    </MainInfo>
  );
};

export default planning;
