import React from "react";
import classes from "./support.module.css";
import Main from "./mainSolar";

const support = () => {
  const supportHandler = [
    {
      Button: "Free",
      text: "Solar PV & Battery Monitoring App",
      text1: "Standard product warranty support",
      button: "£0.00/month",
    },
    {
      Button: "Basic",
      text: "Solar PV & Battery Monitoring App",
      text1: "24 hrs virtual support via app",
      text2: "Standard product warranty support",
      text3: "24 hrs SLA for any issues",
      text4: "Annual equipment maintenance cycle",
      button: "£9.99/month",
    },
    {
      Button: "Standard",
      text: "All-In-One App",
      text1: "24 hrs virtual support via app",
      text2: "Standard product warranty support",
      text3: "24 hrs SLA for any issues",
      text4: "Annual equipment maintenance cycle",
      button: "£15.99/month",
    },
    {
      Button: "Premium",
      text: "All-In-One App",
      text1: "24 hrs virtual support via app",
      text2: "Standard product warranty support",
      text3: "24 hrs SLA for any issues",
      text4: "Annual equipment maintenance cycle",
      text5: "Annual Solar Cleaning",
      text6: "Repairs on Accidental damage",
      text7: "Labour, Material & Repairs cost covered",
      text8: "Remote 24/7 Online Monitoring",
      button: "£21.99/month",
    },
  ];
  return (
    <Main>
      <div className={"container"}>
        <div>
          <p className={classes.mainPara}>Support</p>
        </div>
        {/* <div className={"container"}>
          <div className="row">
            <div className={`col-sm-3 ${classes.mainBorder}`}>
              <div className={`card ${classes.mainheight}`}>
                <div className="card-body">
                  <button
                    className={`btn btn-warning ${classes.btnacolor} `}
                    // className={classes.btncolor}
                  >
                    Free
                  </button>
                  <div>
                    <ul>
                      <p>Solar PV & Battery Monitoring App</p>
                      <p>Standard product warranty support</p>
                    </ul>
                  </div>
                  <button className={`btn ${classes.btnmoney}`}>
                    £0.00/month
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={`card ${classes.mainheight}`}>
                <div className="card-body">
                  <button className={`btn btn-warning ${classes.btnacolor} `}>
                    Basic
                  </button>
                  <div>
                    <ul>
                      <p>Solar PV & Battery Monitoring App</p>
                      <p>24 hrs virtual support via app</p>
                      <p>Standard product warranty support</p>
                      <p>24 hrs SLA for any issues</p>
                      <p>Annual equipment maintenance cycle</p>
                    </ul>
                  </div>
                  <button className={`btn ${classes.btnmoney}`}>
                    £9.99/month
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className={`card ${classes.mainheight}`}>
                <div className="card-body">
                  <button className={`btn btn-warning ${classes.btncolor} `}>
                    Standard
                  </button>
                  <div>
                    <ul>
                      <p>All-In-One App</p>
                      <p>24 hrs virtual support via app</p>
                      <p>Standard product warranty support</p>
                      <p>24 hrs SLA for any issues</p>
                      <p>Annual equipment maintenance cycle</p>
                    </ul>
                  </div>
                  <button className={`btn ${classes.btnmoney}`}>
                    £15.99/month
                  </button>
                </div>
              </div>
            </div>
            <div className={`col-sm-3 ${classes.mainBorder}`}>
              <div className={`card ${classes.mainheight}`}>
                <div className="card-body">
                  <button className={`btn btn-warning ${classes.btncolor} `}>
                    Premium
                  </button>
                  <div>
                    <ul>
                      <p>All-In-One App</p>
                      <p>24 hrs virtual support via app</p>
                      <p>Standard product warranty support</p>
                      <p>24 hrs SLA for any issues</p>
                      <p>Annual equipment maintenance cycle</p>
                      <p>Annual Solar Cleaning</p>
                      <p>Repairs on Accidental damage</p>
                      <p>Labour, Material & Repairs cost covered</p>
                      <p>Remote 24/7 Online Monitoring</p>
                    </ul>
                  </div>
                  <button className={`btn ${classes.btnmoney}`}>
                    £21.99/month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div>
          <ul className={classes.mainMap}>
            {supportHandler.map((item) => (
              <div className={classes.innerMap}>
                <div>
                  <button className={classes.mainButton}>{item.Button}</button>
                </div>
                <div className={classes.innertext}>
                  <p>{item.text}</p>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                  <p>{item.text4}</p>
                  <p>{item.text5}</p>
                  <p>{item.text6}</p>
                  <p>{item.text7}</p>
                  <p>{item.text8}</p>
                </div>
                <div>
                  <button>{item.button}</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
};

export default support;
