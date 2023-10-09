import React from "react";
import MainCart from "./Main";
import classes from "./Cart.module.css";
import vana from "./Assets/vana.png";
import tick from "./Assets/tick.svg";
import excle from "./Assets/excle.svg";
import star from "./Assets/star.png";
import phone from "./Assets/phone.png";
import Car from "./Assets/Car.png";
import Octu from "./Assets/Octu.png";
import leaf from "./Assets/leaf.png";
import Star1 from "./Assets/Star1.png";
import Detail from "./Assets/Detail.png";
import chart from "./Assets/chart.png";
import blue from "./Assets/blue.png";
import Red from "./Assets/Red.png";
import pink from "./Assets/pink.png";
import circle from "./Assets/circle.png";
import clock from "./Assets/clock.png";
import ball from "./Assets/ball.png";
import white from "./Assets/white.png";
import Nak from "./Assets/Nak.png";
import Trust from "./Assets/Trust.png";
import support from "./Assets/support.png";
import Full from "./Assets/Full.png";
import excla from "./Assets/excla.png";
import pus from "./Assets/pus.png";
import Kit from "./Assets/Kit.png";
import Delete from "./Assets/Delete.png";
import pdf from "./Assets/pdf.svg";
import down from "./Assets/down.svg";

const Cart = () => {
  const chargingHolder = [
    {
      image: blue,
      Head: "Standard Charging",
      Text: "48%",
    },
    {
      image: Red,
      Head: "Peak Charging",
      Text: "32%",
    },
    {
      image: pink,
      Head: "off-peak Charging",
      Text: "20%",
    },
  ];
  const clickHandler = [
    {
      image: ball,
      text: "ball",
    },
    {
      image: white,
      text: "Smart Home",
    },
    {
      image: white,
      text: "Smart Meter",
    },
  ];
  const clockHandler = [
    {
      image: clock,
      text: "14 X 375 W Jinko panels",
    },
    {
      image: clock,
      text: "5.2 Kwh Solar Hybrid Invertor",
    },
    {
      image: clock,
      text: "3.2 Kw Solar Amass Lithium battery",
    },
  ];
  return (
    <div className={"container"}>
      <MainCart>
        <div className={classes.outerCart}>
          <p className={classes.cartpara}>Cart</p>
          <div className={classes.innerCart}>
            <p className={classes.cartparaok}>yes I'm Ok</p>
            <button className={classes.cartbuttook}>CONFIRM</button>
          </div>
        </div>

        <div className={classes.mainCar}>
          <div className={classes.innerMani}>
            <div className={classes.dealMain}>
              <p className={classes.Evmain}>EV DEAL</p>
              <hr className={classes.innerhr} />
              <img src={Car} className={classes.innercar} />
              <p>Hyundai Creta, Electric Hatchback</p>
              <p className={classes.upouter}>60kW E-Up 32kWh 5dr Auto</p>
            </div>
          </div>
          <div className={classes.innerTabel}>
            <table className={"table table-bordered"} style={{ width: "50%" }}>
              <thead className={classes.colorHead}>
                <tr className={classes.trMain}>
                  <th scope="col">Provider</th>
                  <th scope="col">EV charger</th>
                  <th scope="col">Insurance</th>
                  <th scope="col">Maintenance</th>
                  <th scope="col">Break- down Cover</th>
                  <th scope="col">Owner- ship type</th>
                  <th scope="col">Owner- ship</th>
                  <th scope="col">Contract Length</th>
                  <th scope="col">Miles</th>
                  <th scope="col">Delivery</th>
                  <th scope="col">Extras</th>
                  <th scope="col">Deposit</th>
                  <th scope="col">Monthly rent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <img src={vana} className={classes.vanaImg} />
                    <div className={classes.maiDiv}>
                      <img src={star} className={classes.imgstar} />
                      <p className={classes.mainText}>4.5</p>
                    </div>
                  </th>
                  <td>
                    <img src={tick} className={classes.tickImg} />
                    <p>Included</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <img src={tick} className={classes.tickImg} />
                    <p>Included</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <img src={tick} className={classes.tickImg} />
                    <p>Included</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <img src={tick} className={classes.tickImg} />
                    <p>Included</p>
                    <img src={excle} className={classes.excleImg} />
                  </td>
                  <td>
                    <p>Standard</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <p>Personal</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <p>24 months</p>
                  </td>
                  <td>
                    <p>5000/ year</p>
                  </td>
                  <td>
                    <p>2-3 weeks</p>
                  </td>
                  <td>
                    <p>Redund- ancy and Life Event Cover</p>
                    <img src={excle} />
                  </td>
                  <td>
                    <p>£2500</p>
                    <p>(incl. VAT)</p>
                  </td>
                  <td>
                    <p>£359.99</p>
                    <p>(incl. VAT)</p>
                  </td>
                </tr>

                <tr>
                  <td
                    scope="row"
                    colspan={3}
                    className={classes.reduceCellHeight}
                  >
                    <div className={classes.mainRow}>
                      <img src={phone} className={classes.mainPhone} />
                      <div>
                        <p className={classes.mainPass}>
                          Smart Pro Subscription
                        </p>
                        <div className={classes.mainIndr}>
                          <p>By Indra</p>

                          <img src={star} className={classes.imgstar} />
                          <p>4.3</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td colspan={3}>
                    <div className={classes.innerMain}>
                      <p className={classes.solarPassag}>Solar Integration</p>
                      <div className={classes.chargMain}>
                        <p className={classes.solarPassag}>Smart Charging</p>
                        <p className={classes.solarPassag}>Fuse Protection</p>
                      </div>
                    </div>
                  </td>
                  <td colspan={7}>
                    <div className={classes.underCart}>
                      <p className={classes.innerPassag}>
                        <span className={classes.Outerspan}>
                          £ 1250 incl.VAT
                        </span>{" "}
                        without OLEV Grant (homeowners)
                      </p>
                      <p className={classes.innerPassag}>
                        <span className={classes.Outerspan}>
                          £99 Deposit incl.VAT
                        </span>{" "}
                        and installations via
                      </p>
                      <p className={classes.innerPassag}>Details </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row" colspan={13}>
                    <div className={classes.reduceCellHeigh}>
                      <button className={classes.mainDelete}>Delete</button>
                      <button className={classes.mainDelete}>Change</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.mainCar}>
          <div className={classes.innerMani}>
            <div>
              <img src={pus} className={classes.mainPus} />
            </div>
          </div>
          <div>
            <table className={"table table-bordered"}>
              <thead className={classes.colorHead}>
                <tr className={classes.trMain}>
                  <th scope="col">Provider</th>
                  <th scope="col">Total Annual Cost (Home + EV charging)</th>
                  <th scope="col">Estimated Savings</th>
                  <th scope="col">How do you save?</th>
                  <th scope="col">Off- peak rate</th>
                  <th scope="col">Contract term</th>
                  <th scope="col">Accessories</th>
                  <th scope="col">Public Charging discount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <img src={Octu} />
                    <p>Octopus Go (Super Green)</p>
                    <img src={leaf} />
                    <p>Renewable</p>
                    <img src={Star1} />
                    <img src={Detail} />
                  </td>
                  <td>
                    <div className={classes.mainExcla}>
                      <p>£153.50</p>
                      <img src={excle} className={classes.mainexcle} />
                    </div>
                    <img src={chart} className={classes.chartInner} />
                    <div>
                      <ul>
                        {chargingHolder.map((item) => (
                          <div className={classes.mapChart}>
                            <img
                              src={item.image}
                              className={classes.chargHold}
                            />
                            <p className={classes.mapText}>{item.Head}</p>
                            <p className={classes.mapText}>{item.Text}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div className={classes.mainExcla}>
                      <p>£153.50</p>
                      <img src={excle} />
                    </div>
                    <img src={circle} className={classes.circleMain} />
                    <div>
                      <ul>
                        {chargingHolder.map((item) => (
                          <div className={classes.mapChart}>
                            <img
                              src={item.image}
                              className={classes.chargHold}
                            />
                            <p className={classes.mapText}>{item.Head}</p>
                            <p className={classes.mapText}>{item.Text}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>By Charging at home between</p>
                      <div className={classes.mainclock}>
                        <img src={clock} className={classes.clockMain} />
                        <p>12.30 am to 4.30 am</p>
                      </div>
                      <p>5p/kWh</p>
                    </div>
                  </td>
                  <td>
                    <p>5p/ Kwh</p>
                  </td>
                  <td>
                    <p>25p/ Kwh</p>
                  </td>
                  <td>
                    <div>
                      <ul>
                        {clickHandler.map((item) => (
                          <div className={classes.clickHand}>
                            <img src={item.image} className={classes.charOut} />
                            <p className={classes.charOutText}>{item.text}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>2000/ Annual Free miles</p>
                      <p>10% discount on Shell & BP stations</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row" colspan={13}>
                    <div className={classes.reduceCellHeigh}>
                      <button className={classes.mainDelete}>Delete</button>
                      <button className={classes.mainDelete}>Change</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={classes.mainCar}>
          <div className={classes.innerMan}>
            <div className={classes.dealMain}>
              <p className={classes.Evmain}>PV KIT DEAL</p>
              <hr className={classes.innerhr} />
              <img src={Kit} />
            </div>
          </div>

          <div>
            <table className={"table table-bordered"}>
              <thead className={classes.colorHead}>
                <tr className={classes.trMain}>
                  <th scope="col">Provider</th>
                  <th scope="col">Product includes</th>
                  <th scope="col">Estimated Heat Generation</th>
                  <th scope="col">Estimated Electricity Generation</th>
                  <th scope="col">Estimated Electricity Savings/Year</th>
                  <th scope="col">
                    Estimated Income from Electricity Export (SEG)
                  </th>
                  <th scope="col">Estimated Payback</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colspan={1}>
                    <div className={classes.NakMain}>
                      <div className={classes.trustMain}>
                        <img src={Nak} className={classes.NakImg} />
                      </div>
                      <div className={classes.trustMain}>
                        <img src={Trust} className={classes.TruImg} />
                      </div>
                      <img src={support} className={classes.SuppoImg} />
                      <p>Support Plans</p>
                      <img src={Full} className={classes.SuppoImg} />
                      <p>Full Installation</p>
                    </div>
                  </td>
                  <td colspan={1}>
                    <div>
                      <ul>
                        {clockHandler.map((item) => (
                          <div className={classes.innerMap}>
                            <img
                              src={item.image}
                              className={classes.PanelImg}
                            />
                            <p>{item.text}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td colspan={1}>
                    <div>
                      <p>4500 Kwh /Year</p>
                    </div>
                  </td>
                  <td colspan={1}>
                    <div>
                      <p>4000 Kwh /Year</p>
                    </div>
                  </td>
                  <td>
                    <p>£285.47</p>
                  </td>
                  <td>
                    <p>£200</p>
                  </td>
                  <td>
                    <div>
                      <p>£350 /year</p>
                      <p>7 years</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Total Cost</p>
                      <div className={classes.mainVat}>
                        <p>£7895</p>
                        <p>incl VAT</p>
                      </div>
                      <div>
                        <p>Or</p>
                        <p>Instalments from</p>
                        <p>£199/month</p>
                        <img src={excla} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row" colspan={13}>
                    <div className={classes.outerInfo}>
                      <p className={classes.ProductP}>Product Info</p>
                      <div className={classes.innerInfo}>
                        <img src={pdf} className={classes.imgPdf} />

                        <p>Product Info</p>
                        <img src={down} className={classes.downPdf} />
                      </div>
                      <div className={classes.innerInfo}>
                        <img src={pdf} className={classes.imgPdf} />
                        <p>Solution Proposal</p>
                        <img src={down} className={classes.downPdf} />
                      </div>
                      <button className={classes.mainDelete}>Delete</button>
                      <button className={classes.mainDelete}>Change</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainCart>
    </div>
  );
};

export default Cart;
