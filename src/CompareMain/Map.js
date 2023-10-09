import React from "react";
import classes from "./Map.module.css";
import Map1 from "./Assets/Map.png";
import button from "./Assets/button.png";
import { useNavigate } from "react-router";

const Map = () => {
  const navigate = useNavigate();
  const Nextbutton = () => {
    navigate("/Kit");
  };

  return (
    <section>
      <div className={classes.mainMap}>
        <div>
          <img src={Map1} className={classes.imageMap} />
        </div>
        <div className={classes.inernalMap}>
          <div className={classes.outerColor}>
            <p className={classes.mainText}>
              74 Aldermoor lane, conventry, west Midlands, CV31JY
            </p>
            <div className={classes.imgButton}>
              <img src={button} className={classes.mapImg} />
            </div>
          </div>
          <div>
            <p className={classes.innerPara}>
              Please confirm if the red marker is pointing at your own roof-top
              or else change it to the right house
            </p>
            <p className={classes.innePara}>
              Our AI engine will decide the right PV size based on your roof
              conditions
            </p>
            <div className={classes.innerbtn}>
              <button className={classes.mainbtn} onClick={() => Nextbutton()}>
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
