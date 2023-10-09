import React from "react";
import { Link, Route } from "react-router-dom";
import EVPVgo from "./NavbarAssets/EVPV.png";
import classes from "../components/Navbar.module.css";
import Homeimg from "./NavbarAssets/home.svg";
import chartimg from "./NavbarAssets/chart.png";
import Home from "./Home";
import FooterMain from "./Footer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // const gotoNext = () => {
  //   navigate("/CompareDeals");
  // };
  // const TarrifNext = () => {
  //   navigate("/Tarrif");
  // };
  // const ProductNext = () => {
  //   navigate("/Product");
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className={classes["image-nav"]}
              src={EVPVgo}
              alt="This is evpvgo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  mb-2 mb-lg-0  with-gap"
              style={{ gap: "12px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img src={Homeimg} className={classes.navbarfont} />
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link Evzap-Color" to="/">
                  <p className={`${classes.EvzapColor} ${classes.navbarfont}`}>
                    EVZAP App
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // onClick={() => gotoNext()}
                >
                  {/* <p className={classes.navbarfont}> */}
                  Compare Deals
                  {/* </p> */}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/CompareDeals">
                      <p className={classes.navbarfont}>Compare Deals</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">
                      <p className={classes.navbarfont}>Compare Van Deals</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">
                      <p>Compare insurance deals</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/Cart">
                  <p className={classes.navbarfont}>Electric Vehicles</p>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Tarrif">
                  <p className={classes.navbarfont}>EV Tariffs</p>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <p className={classes.navbarfont}> */}
                  Solar Kits
                  {/* </p> */}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Product"
                      // onClick={() => ProductNext()}
                    >
                      Products in the Package
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">
                      Installation Process
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/finance">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Service">
                      All-In-One App Service
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <p className={classes.navbarfont}> */}
                  Info
                  {/* </p> */}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Product"
                      // onClick={() => ProductNext()}
                    >
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seg">
                      SEG & Export
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/planning">
                      Planning Permission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Grants">
                      Government Grants
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Mission">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/partner">
                      Our Partners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/form">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <p className={classes.navbarfont}>
                    Login/Register
                    <br />
                    01523 01523
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link chart-img" to="/Cart">
                  <img src={chartimg} className={classes.navbarfont} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Home />
      <FooterMain /> */}
    </>
  );
};

export default Navbar;
