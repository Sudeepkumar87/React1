import React from "react";
import classes from "./Home.module.css";
import Main from "./MainHome";
import MainHeader from "./MainHeader";

const Home = () => {
  return (
    <Main>
      <div>
        <div>
          <p className={classes["main-EVPVgop"]}>EVPVgo App</p>
          <p className={classes.mainP}>
            Over 17,450 charge stations operated by over 15 charge point
            operators...
            <span className={classes["span-folder"]}>
              {" "}
              use ONE APP to charge your
            </span>
          </p>
        </div>
      </div>
      <MainHeader />
    </Main>
  );
};

export default Home;
