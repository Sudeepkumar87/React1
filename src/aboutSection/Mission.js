import React from "react";
import Mession from "./aboutusAssets/Mission.png";
import classes from "./Mission.module.css";

function Mission() {
  const missionP = [
    {
      text: "At EVPVgo we are passionate about creating a sustainable future with clean cars with green homes. We are here to make sure that our next generations breath cleaner air and live in a society that does not harm the environment.",
    },
    {
      text: "We are supporting the NET-ZERO ambition and we do so by preparing our nation with the “Electrification Age”. We do so by providing the right technology including hardware and software",
    },
    {
      text: "Our mission is to support the government’s agenda on reducing dependency on fossil fuel cars. So we provide the drivers with easy access to affordable Electric Vehicles from a large number of partners giving the best offers & deals.",
    },
    {
      text: "We believe that Solar Energy and other sources of renewable energy plays a key part. Our secondary mission is to present the cheapest and best value solar PV kits directly to homeowners so that they can generate their own free energy and use it to power their homes and Electric Vehicles & reduce dependency on Grid supply. In-fact our aim is to empower homeowners to export surplus energy, thus providing energy where needed and at the same time generate income for doing so.",
    },
  ];
  return (
    <section>
      <div>
        <p className={classes.missionText}>
          Our <span className={classes.mainSpan}>Mission</span>
        </p>
      </div>
      <div>
        <ul className={classes.mainIntro}>
          <div>
            <img src={Mession} className={classes.missionImag} />
          </div>
          <div>
            {missionP.map((item, index) => (
              <div className={classes.mainMpara}>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Mission;
