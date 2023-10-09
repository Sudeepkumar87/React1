import React, { useState } from "react";
import Arrow from "./Assets/Arrow.svg";
import classes from "./Offer.module.css";
import solar from "./Assets/Sola.png";
import Hand from "./Assets/Hand.png";
import Hand1 from "./Assets/Hand1.png";
import Hand2 from "./Assets/Hand2.png";
import Hand3 from "./Assets/Hand3.png";
import Hand4 from "./Assets/Hand4.png";
import correct from "./Assets/correct.png";
import battrey from "./Assets/Battery.png";
import baterry1 from "./Assets/Batttery1.png";
import battery2 from "./Assets/Battery2.png";
import battery3 from "./Assets/Battery3.png";
import gas from "./Assets/gas.png";
import gas1 from "./Assets/gas1.png";
import gas2 from "./Assets/gas2.png";
import gas3 from "./Assets/gas3.png";
import chart from "./Assets/Chart.png";
import blank from "./Assets/Blank1.png";
import co2 from "./Assets/ca2.svg";
import clock from "./Assets/clock.png";
import Nak from "./Assets/Nak.png";
import Trust from "./Assets/Trust.png";
import support from "./Assets/support.png";
import Full from "./Assets/Full.png";
import excla from "./Assets/excla.png";
import system from "./Assets/system1.png";
import pdf from "./Assets/pdf.svg";
import download from "./Assets/down.svg";
import { useNavigate } from "react-router";
import Name from "../Model/Name";
const Offer = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const navigate = useNavigate();
  const gotoNext = () => {
    navigate("Break");
  };
  const Tickhandler = [
    {
      image: Hand,
      Head: "25 Years",
      Text: "Standard Panel lifetime",
    },
    {
      image: Hand1,
      Head: "On-site survey",
      Text: "An installer will check roof structure & Connection",
    },
    {
      image: Hand2,
      Head: "1-2 days",
      Text: "Installation work",
    },
    {
      image: Hand3,
      Head: "8-12 years",
      Text: "Standard manufacture warranty period",
    },
    {
      image: Hand4,
      Head: "MCS Certificate",
      Text: "Always use MCS accredited Installer",
    },
  ];
  const solarHaandler = [
    {
      image: correct,
      image1: battrey,
      text: "Solar PV",
      para: "Generate electric energy from sun power",
    },
    {
      image: blank,
      image1: baterry1,
      text: "EV charger",
      para: "Smart Electric Vehicle Charger",
    },
    {
      image: blank,
      image1: battery2,
      text: "Home Battery",
      para: "Store excess electric energy for later use in the evening",
    },
    {
      image: blank,
      image1: battery3,
      text: "Micro Wind Turbine",
      para: "Generate electric energy from wind power",
    },
  ];
  const solarPanel = [
    {
      image: correct,
      image1: gas,
      text: "Air Source Heat Pump",
      para: "Generate heat from outside air",
    },
    {
      image: blank,
      image1: gas1,
      text: "Heat Battery",
      para: "Store heat in battery to supply home heating",
    },
    {
      image: blank,
      image1: gas2,
      text: "Electric Boiler",
      para: "Replace boiler with pure electric boiler",
    },
    {
      image: blank,
      image1: gas3,
      text: "Hot Water Cylinder",
      para: "Store heat in water tank to supply home heating",
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
  // const navigate = useNavigation();
  // const buttonHandler = () => {
  //   navigate("/Break");
  // };
  console.log(cartIsShown, "Sunil");
  return (
    <section className={"container"}>
      <div>
        <div className={classes.mainArrow}>
          <img src={Arrow} />
          <p className={classes.mainPara}>You PV Kit Offers</p>
        </div>
        <div className={classes.flexBox}>
          <div>
            <div className={classes.solarMain}>
              <img src={solar} className={classes.imgSolar} />
            </div>
            <div className={classes.backMain}>
              <p className={classes.mainContri}>
                Contribute towards helping the planet
              </p>
              <p className={classes.innerContri}>
                When you generate your own energy, it ultimately reduces the
                need to burn coal & other bad fuels and contributing towards
                net-zero targets
              </p>
            </div>
          </div>
          <div className={classes.mainKit}>
            <p className={classes.mainPassa}>Why PV Kits?</p>
            <p className={classes.innerPass}>Save on energy bills</p>
            <p className={classes.outerPass}>
              Generate your own energy and reduce your imports from the grid,
              lowering your bills
            </p>
            <p className={classes.innerPass}>Generate income</p>
            <p className={classes.outerPass}>
              Your PV system will generate excess energy at times which can be
              exported back to grid using SEG for addition income
            </p>
            <p className={classes.innerPass}>Reduce fossil fuel burning</p>
            <p className={classes.outerPass}>
              When you generate your own energy you reduce the supply which
              in-turn means less coal & bad fuel use to generate your energy
            </p>
          </div>
          <div>
            <div className={classes.mainAffort}>
              <p className={classes.AffortMain}>Affordable Renewables</p>
              <p className={classes.Affortpara}>
                All our offers are available on finance with low rates, giving
                you the flexibility to distribute the costs
              </p>
            </div>
            <div className={classes.mainAffort}>
              <p className={classes.AffortMain}>Custom Packaged kits</p>
              <p className={classes.Affortpara}>
                Your offers are customised and packaged to suit your needs and
                budget
              </p>
            </div>

            <div className={classes.mainAffort}>
              <p className={classes.AffortMain}>Peace-of-mind</p>
              <p className={classes.Affortpara}>
                All offers includes complete installation by certified MCS
                installers, along with peace-of-mind services to look after the
                assets for years to come
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className={classes.mainOffer}>All offers include</p>
          </div>
          <ul className={classes.mapoffer}>
            {Tickhandler.map((item) => (
              <div>
                <div className={classes.innerOffer}>
                  <img src={item.image} className={item.imageoffer} />
                </div>
                <p className={classes.offerHead}>{item.Head}</p>
                <p className={classes.offerText}>{item.Text}</p>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div className={classes.mainAccordion}>
              <div>
                <p>Sort by</p>
              </div>

              <div className={classes.mainPrice}>
                <div>
                  <p>Price</p>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      className={`accordion-button collapsed ${classes.mainAccorbtn}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Low to High
                    </button>
                  </h2>
                </div>
              </div>
              <div className={classes.mainPrice}>
                <div>Energy Generation</div>
                <div className={`accordion-item ${classes.accordItem}`}>
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      className={`accordion-button collapsed ${classes.mainAccorbtn}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Low to High
                    </button>
                  </h2>
                </div>
              </div>
              <div className={classes.mainPrice}>
                <div>
                  <p>Recommended by us</p>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      className={`accordion-button collapsed ${classes.mainAccorbtn}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Best value
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">Best price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mainFlexItem}>
          <div className={classes.mainGener}>
            <div>
              <p className={classes.mainElec}>
                Electricity Generation & Storage
              </p>
              <p className={classes.ElecPara}>
                Generate your own electricity, store it &
                <span className={classes.innerSpan}>
                  {" "}
                  save on electric bills
                </span>
              </p>
            </div>
            <div>
              <ul className={classes.mainHandMap}>
                {solarHaandler.map((item) => (
                  <div className={classes.outerHand}>
                    <div className={classes.handMain}>
                      <img src={item.image} className={classes.mainImg} />
                      <img src={item.image1} className={classes.innerFlex} />
                    </div>
                    <div className={classes.handPara}>
                      <p className={classes.OuterPara}>{item.text}</p>
                      <p className={classes.OuterPar}>{item.para}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div></div>
          <div className={classes.mainGener}>
            <div>
              <p className={classes.mainElec}>Heat Generation and Storage</p>
              <p className={classes.ElecPara}>
                Generate your own heat energy, store it &{" "}
                <span className={classes.innerSpan}>save on gas bills </span>
              </p>
            </div>
            <div>
              <ul className={classes.mainHandMap}>
                {solarPanel.map((item) => (
                  <div className={classes.outerHand}>
                    <div className={classes.handMain}>
                      <img src={item.image} className={classes.mainImg} />
                      <img src={item.image1} className={classes.innerFlex} />
                    </div>
                    <div className={classes.handPara}>
                      <p className={classes.OuterPara}>{item.text}</p>
                      <p className={classes.OuterPar}>{item.para}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className={classes.mainCarbon}>
              <p className={classes.mainGreen}>50% Green Home</p>
              <p className={classes.innerGreen}>(see your score)</p>
            </div>
            <div className={classes.mainDivChart}>
              <img src={chart} className={classes.mainChart} />
              <img src={co2} className={classes.Chartco2} />
              <p className={classes.Chartsave}>You Saved</p>
              <p className={classes.mainkg}>2500 kg/year</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <table className={"table table-bordered"}>
              <thead className={classes.colorHead}>
                <tr className={classes.trMain}>
                  <th scope="col" className="text-center">
                    Product Image
                  </th>
                  <th scope="col" className="text-center">
                    Provider
                  </th>
                  <th scope="col">Product includes</th>
                  <th scope="col" className={"text-center"}>
                    Estimated Heat Generation
                  </th>
                  <th scope="col">Estimated Gas Savings/ year</th>
                  <th scope="col">Estimated Electricity Savings/Year</th>
                  <th scope="col">Estimated Electricity Generation</th>
                  <th scope="col">Estimated Electricity Savings/Year</th>
                  <th scope="col">Estimated Payback</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
            </table>
            <table className={"table table-bordered"}>
              <tbody>
                <tr>
                  <td>
                    <img src={system} />
                  </td>
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
                            <p className={classes.PanelText}>{item.text}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td colspan={1}>
                    <div className={classes.speedMain}>
                      <p>4500 Kwh /Year</p>
                    </div>
                  </td>
                  <td colspan={1}>
                    <div className={classes.speedMain}>
                      <p>£250</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.speedMain}>
                      <p>4000 Kwh /Year</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.speedMain}>
                      <p>£285.47</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.speedMain}>
                      <p>£200</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.speedMain}>
                      <p>£350 /year</p>
                      <p>7 years</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.mainCost}>
                      <p className={classes.innerPara}>Total Cost</p>
                      <div className={classes.mainVat}>
                        <p className={classes.dollarPara}>£7895</p>
                        <p>incl VAT</p>
                      </div>
                      <div>
                        <p className={classes.ormain}>Or</p>
                        <p className={classes.Instamain}>Instalments from</p>
                        <p className={classes.dollarPara}>£199/month</p>
                        <img src={excla} className={classes.mainexcla} />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={10}>
                    <div className={classes.mainProd}>
                      <div>
                        <p className={classes.mainProduct}>Product Info</p>
                      </div>
                      <div className={classes.innerProd}>
                        <div className={classes.outerProd}>
                          <img src={pdf} className={classes.imagePdf} />
                          <p>Solution Proposal</p>
                        </div>
                        <div>
                          <img src={download} className={classes.imagedown} />
                        </div>
                      </div>
                      <div className={classes.innerProd}>
                        <div className={classes.outerProd}>
                          <img src={pdf} className={classes.imagePdf} />
                          <p>Product Info</p>
                        </div>
                        <div>
                          <img src={download} className={classes.imagedown} />
                        </div>
                      </div>
                      <div className={classes.btnMain}>
                        <button
                          className={classes.callMain}
                          onClick={() => gotoNext()}
                        >
                          CALL US
                        </button>
                        <button
                          className={classes.calMain}
                          onClick={() => setCartIsShown(true)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Name cartIsShown={cartIsShown} setCartIsShown={setCartIsShown} />
        </div>
      </div>
    </section>
  );
};

export default Offer;
