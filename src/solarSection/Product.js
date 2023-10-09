import React from "react";
import classes from "./Product.module.css";
import Main from "./mainSolar";
import Arrow from "./solarAssets/Arrow.png";
import water from "./solarAssets/water.png";
import hub from "./solarAssets/hub.png";
import panel from "./solarAssets/panel.png";
import storage from "./solarAssets/storage.png";
import EV from "./solarAssets/EV.png";
import sensor from "./solarAssets/sensor.png";
import invert from "./solarAssets/invert.png";
import house from "./solarAssets/house.png";
import uArrow from "./solarAssets/uArrow.png";
import hot from "./solarAssets/hot.png";
import char from "./solarAssets/char.png";
import usb from "./solarAssets/usb.png";
import or from "./solarAssets/or.png";
import PV from "./solarAssets/PV.png";
import battery from "./solarAssets/battery.png";
import energy from "./solarAssets/energy.png";
import Model from "../Model/Model";
const Product = () => {
  const Package = [
    {
      image: water,
      header: "Hot water Divertor",
      text: "Will divert excess solar energy to hot water tanks or underfloor heating",
    },
    {
      image: hub,
      header: "Hub",
      text: "Act as the central interface to connect all devices & work in harmony to use preferences",
    },
    {
      image: panel,
      header: "PV Panels",
      text: "Generate energy from the sun during the day",
    },
    {
      image: storage,
      header: "Energy Storage",
      text: "Battery will store excess energy and provide power for evening",
    },
    {
      image: EV,
      header: "EV Charger",
      text: "Smart charging of your EV at your convenience but at lower tariffs",
    },
    {
      image: sensor,
      header: "Sensor",
      text: "To monitor energy flows in/out & to identify equipment problems",
    },
    {
      image: invert,
      header: "Inverter",
      text: "Convert solar DC > AC to feed into home appliances & battery",
    },
  ];
  const Storage = [
    {
      image: hot,
      header: "Hot water Divertor",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: char,
      header: "EV Charger",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: usb,
      header: "Hub",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: or,
      header: "Sensor",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: PV,
      header: "PV Panels",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: battery,
      header: "Inverter",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
    {
      image: energy,
      header: "Energy Storage",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    },
  ];
  return (
    <section className={"container"}>
      <Main>
        <div className={classes.mainHeader}>
          <img src={Arrow} className={classes.mainImage} />
          <p className={classes.mainText}>
            Product<span className={classes.mainSpan}>Package</span>{" "}
          </p>
        </div>
        <div className={classes.mainQueue}>
          <div>
            <ul className={classes.mainPara}>
              {Package.map((item) => (
                <div className={classes.innerPara}>
                  <div className={classes.mapMain}>
                    <img src={item.image} className={classes.imagePara} />
                    <p className={classes.outerMain}>{item.header}</p>
                  </div>
                  <p className={classes.outertext}>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <img src={house} className={classes.imgHouse} />
          </div>
        </div>
      </Main>
      <div className={classes.Headermain}>
        <div>
          <img src={uArrow} />
        </div>
        <div>
          <div>
            <ul>
              {Storage.map((item) => (
                <div className={classes.maiMap}>
                  <div className={classes.maiHead}>
                    <img src={item.image} className={classes.mainImg} />
                    <p className={classes.mainParag}>{item.header}</p>
                  </div>
                  <p className={classes.ParagText}>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
