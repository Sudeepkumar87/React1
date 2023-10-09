import React from "react";
import Footer from "./mainFooter";
import classes from "./Footer.module.css";
import Face1 from "./NavbarAssets/facebook.png";
import Face2 from "./NavbarAssets/Face2.png";
import Face3 from "./NavbarAssets/Face3.png";
import Face4 from "./NavbarAssets/Face4.png";

const FooterMain = () => {
  return (
    <Footer>
      <div className={classes.outerFooter}>
        <div className={classes.FooterOuter}>
          <p className={classes.mainfooter}>Popular Car Lease Searches</p>
          <p className={classes.footerT}>Mercedes-Benz Personal Leasing</p>
          <p className={classes.footerT}>Audi ersonal Leasing</p>
          <p className={classes.footerT}>Ford Personal Leasing</p>
          <p className={classes.footerT}>Land Rover Personal Leasing</p>
          <p className={classes.footerT}>Volkswagen Personal Leasing</p>
          <p className={classes.footerT}>BMW Personal Leasing</p>
          <p className={classes.footerT}>Volvo Personal Leasing</p>
          <p className={classes.footerT}>Hyundai Personal Leasing</p>
        </div>
        <div className={classes.innerOuter}>
          <p className={classes.mainfooter}>Useful Links</p>
          <p className={classes.footerT}>Finance</p>
          <p className={classes.footerT}>Support</p>
          <p className={classes.footerT}>Latest News</p>
          <p className={classes.footerT}>SEG & Export</p>
          <p className={classes.footerT}>Planning Permission</p>
          <p className={classes.footerT}>Government Grants</p>
          <p className={classes.footerT}>Installation Process</p>
          <p className={classes.footerT}>Products in the Package</p>
        </div>
        <div className={classes.FooterOuter}>
          <p className={classes.mainfooter}>Our Service</p>
          <p className={classes.footerT}>EV Tariffs</p>
          <p className={classes.footerT}>EVZAP App</p>
          <p className={classes.footerT}>Compare Car Deals</p>
          <p className={classes.footerT}>Compare Van Deals</p>
          <p className={classes.footerT}>Compare insurance deals</p>
          <p className={classes.footerT}>All-In-One App Service</p>
        </div>
        <div className={classes.FooterOuter}>
          <div className={classes.innerFooter}>
            <p className={classes.mainfooterS}>Subscribe to our Hot Deals</p>
            <div className={classes.FooterSTE}>
              <input
                type="text"
                placeholder="Enter Email Address"
                // className={classes.FooterInp}
              />
            </div>
            <div className={classes.FooterSTE}>
              <button className={classes.btnfooter}>
                <p className={classes.FooterBtT}>SUBSCRIBE</p>
              </button>
            </div>
          </div>
          <div>
            <p className={classes.mainFooterV}>
              *We send great deals and latest auto news to our subscribed users
              every week.
            </p>
          </div>
          <div className={classes.footerC}>
            <div>
              <p className={classes.footermaP}>Our Service</p>
            </div>
            <div className={classes.socaialFo}>
              <img src={Face1} className={classes.footerSites} />
              <img src={Face2} className={classes.footerSites} />
              <img src={Face3} className={classes.footerSites} />
              <img src={Face4} className={classes.footerSites} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;
