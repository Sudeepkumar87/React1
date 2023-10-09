import React from "react";
import evzap from "./Assets/evzap.png";
import classes from "./CompareDeals.module.css";
import Desktop from "./Assets/Desktop.png";
import Car from "./Assets/Car.png";
import Home from "./Assets/Home.png";
import Sun from "./Assets/Sun.png";
import tick from "./Assets/tick.png";
import excl from "./Assets/excl.png";
import citro from "./Assets/citro.png";
import Volks from "./Assets/Volks.png";
import line from "./Assets/line.svg";
import evzap1 from "./Assets/evzap1.png";
import car1 from "./Assets/car1.png";
import car2 from "./Assets/car2.png";
import car3 from "./Assets/car3.png";
import car4 from "./Assets/car4.png";
import car5 from "./Assets/car5.png";
import car6 from "./Assets/car6.png";
import car7 from "./Assets/car7.png";
import Group from "./Assets/Groupcar.png";
import line1 from "./Assets/line1.png";
import price from "./Assets/price.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const CompareDeals = () => {
  const navigate = useNavigate();

  const vehicleMain = [
    {
      image: Car,
      Header: "Electric Vehicles",
      Text: "Best deals on Electric Vehicles from 1 month -48 months terms",
      button: "Compare EV Deals",
    },
    {
      image: Home,
      Header: "Smart EV Tariffs",
      Text: "Best deals on Home Energy Tariffs for EV drivers, bundled with EV charger & more",
      button: "Compare EV Tariff deals",
    },
    {
      image: Sun,
      Header: "Home Renewable Kits",
      Text: "Best deals on Home Renewable Generation kits, including installation & services",
      button: "Compare PV deals",
    },
  ];
  const paraTick = [
    {
      image: tick,
      text: "Free Home Delivery",
    },
    {
      image: tick,
      text: "Road Tax",
    },
    {
      image: tick,
      text: "Insurance",
    },
    {
      image: tick,
      text: "Maintenance",
    },
    {
      image: tick,
      text: "Breakdown",
    },
    {
      image: tick,
      text: "Electric Charger",
    },
  ];
  const TypesVehicle = [
    {
      text: "Vehicle Type",
      button: "Cars",
      button1: "Vans",
      text1: "Delivery time?",
      button2: "All",
      button3: "2-4 weeks",
      button4: "5-8 weeks",
      button5: "12+ weeks",
    },
  ];

  const TypesVehicles = [
    {
      text: "Compare types of ownership",
      button: "Standard Lease (24 + months)",
      image: excl,

      button2: "Short-term lease (3 – 24 months)",
      image: excl,
      button3: "Subscriptions (1-any)",
      image: excl,
    },
  ];
  const CarProducts = [
    {
      image: citro,
      Main: "Citroen",
      Head: "C4",

      Text: "-E- Hatch 100kw Ev 50kwh Sense Plus-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: Volks,
      Main: "Volkswagen",
      Head: "Up",

      Text: "-E-up 5 Door Hatch Electric 82ps Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car1,
      Main: "Hyundai",
      Head: "Kona",

      Text: "-Hatch 64kwh Electric Premium Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car2,
      Main: "Nissan",
      Head: "Leaf",

      Text: "-5 Door Hatch Acenta 40kw 6.6kw Charger-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car3,
      Main: "Peugeot",
      Head: "2008",

      Text: "-Suv 50kwh 136 Allure Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car4,
      Main: "Vauxhall",
      Head: "Corsa",

      Text: "-Hatch 50kwh 7.4kwch Eltnv Premium Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car5,
      Main: "Hyundai",
      Head: "Ioniq 5",

      Text: "-Hatch 125kw Se Connect 58 Kwh Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car6,
      Main: "Lexus",
      Head: "UX 300e",

      Text: "-Premium Plus Pack E-cvt-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: car7,
      Main: "Mazda",
      Head: "MX-30",

      Text: "-Eskyact Sport Lux 35.5kwh 107kw Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
    {
      image: Volks,
      Main: "Kia",
      Head: "Niro",

      Text: "-E-niro 64kwh Ev 201bhp 4+ Auto-",
      text: "We Have 5 Offers Starts from",
      Amount: "$500",
      head: "Monthly Rental(Inc VAT)",

      button: "VIEW DEAL",
    },
  ];
  return (
    <section>
      <div>
        <div>
          <img src={evzap} className={classes.mainImg} />
        </div>
        <div className={classes.mainSmart}>
          <div>
            <img src={evzap1} className={classes.UKimage} />
          </div>
          <div>
            <div className={classes.headText}>
              <p className={classes.innerText}>
                The UK’s #1, 3-in-1 comparison site
              </p>
              <p className={classes.paraText}>
                Compare your electric vehicle and energy needs in one place
              </p>
            </div>
            <div className={classes.unlistMap}>
              <ul>
                {vehicleMain.map((item, index) => (
                  <div className={classes.mapAmount}>
                    <div>
                      <img src={item.image} className={classes.houseImg} />
                    </div>
                    <div className={classes.mainTerm}>
                      <div>
                        <p className={classes.itemText}>{item.Header}</p>
                        <p className={classes.itempara}>{item.Text}</p>
                      </div>

                      <div>
                        <button
                          className={classes.amountbutton}
                          onClick={() => {
                            if (index === 1) {
                              navigate("/Money");
                            } else if (index === 2) {
                              navigate("/System");
                            }
                          }}
                        >
                          {item.button}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>{" "}
        <div>
          <ul className={classes.mainTick}>
            {paraTick.map((item) => (
              <div className={classes.innerTick}>
                <img src={item.image} className={classes.innerimage} />
                <p className={classes.innerPara}>{item.text}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className={classes.headerMain}>
          <div>
            <p>Choose Your Vehicle</p>
          </div>
          <div>
            <div>
              <ul>
                {TypesVehicle.map((item) => (
                  <div className={classes.mainVehicle}>
                    <p className={classes.vehiText}>{item.text}</p>
                    <button className={classes.buttonText}>
                      {item.button}
                    </button>
                    <button className={classes.buttonone}>
                      {item.button1}
                    </button>
                    <p className={classes.vehiText}>{item.text1}</p>
                    <button className={classes.buttonText}>
                      {item.button2}
                    </button>
                    <button className={classes.buttonone}>
                      {item.button3}
                    </button>
                    <button className={classes.buttonone}>
                      {item.button4}
                    </button>
                    <button className={classes.buttonone}>
                      {item.button5}
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ul className={classes.inneVehicle}>
              {TypesVehicles.map((item) => (
                <div className={classes.innerVehicle}>
                  <p className={classes.Textvehi}>{item.text}</p>
                  <button className={classes.buttonVehicle}>
                    {item.button}
                  </button>
                  <img src={item.image} className={classes.Vehiclebutton} />
                  <button className={classes.mainbutton}>{item.button2}</button>
                  <img src={item.image} className={classes.Vehiclebutton} />
                  <button className={classes.mainbutton}>{item.button3}</button>
                  <img src={item.image} className={classes.Vehiclebutton} />
                </div>
              ))}
            </ul>
          </div>
          <div className={classes.outerPrice}>
            <div className={classes.mainPrice}>
              <label for="star" className={classes.mainBill}>
                Brand
              </label>
              <select
                to="star"
                className={`form-select ${classes.mainSelect}`}
                aria-label="Default select example"
              >
                {" "}
                <option selected>BMW</option>{" "}
              </select>
              <label for="star" className={classes.mainBill}>
                Model
              </label>
              <select
                to="star"
                className={`form-select ${classes.mainSelect}`}
                aria-label="Default select example"
              >
                {" "}
                <option selected>X3</option>{" "}
              </select>
              <label for="star" className={classes.mainBill}>
                Type
              </label>
              <select
                to="star"
                className={`form-select ${classes.mainSelect}`}
                aria-label="Default select example"
              >
                {" "}
                <option selected>Hatchback</option>{" "}
              </select>
              <label for="star" className={classes.mainBill}>
                Milage
              </label>
              <select
                to="star"
                className={`form-select ${classes.mainSelect}`}
                aria-label="Default select example"
              >
                {" "}
                <option selected>200 Miles</option>{" "}
              </select>
              <div>
                <p className={classes.Rangemain}>Price Range</p>
                <img src={price} className={classes.imagePrice} />
                <div className={classes.innerPrice}>
                  <p className={classes.priceOuter}>$25</p>
                  <p className={classes.priceOuter}>$70</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <ul className={classes.maincar}>
                {CarProducts.map((item) => (
                  <div className={classes.innerCar}>
                    <img src={item.image} className={classes.gridImage} />
                    <p className={classes.mainPara}>{item.Main}</p>
                    <p className={classes.mainPar}>{item.Head}</p>

                    <p className={classes.mainPa}>{item.Text}</p>
                    <div className={classes.extraMain}>
                      <div>
                        <p>{item.text}</p>
                      </div>
                      <div>
                        <p className={classes.innermoney}>{item.Amount}</p>
                      </div>
                    </div>
                    <p className={classes.outermoney}>{item.head}</p>
                    <button className={classes.moneybutton}>
                      {item.button}
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className={classes.GroupImg}>News and Blogs</p>
          <img src={Group} className={classes.Grouppara} />
        </div>
        {/* <div>
          <img src={line1} className={classes.innerLine} />
        </div> */}
      </div>
    </section>
  );
};

export default CompareDeals;
