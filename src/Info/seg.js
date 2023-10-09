import React from "react";
import MainInfo from "./mainInfo";
import classes from "./seg.module.css";
import star1 from "./InfoAssets/star.svg";
import solar from "./InfoAssets/solar.svg";
import Hydro from "./InfoAssets/Hydro.svg";
import wind from "./InfoAssets/wind.svg";
import Anaer from "./InfoAssets/Anaer.svg";
import Micro from "./InfoAssets/Micro.svg";
const seg = () => {
  const mainsolar = [
    {
      image1: star1,
      text: "Solar panels (photovoltaic systems)",
    },
    {
      image1: star1,
      text: "Hydropower",
    },
    {
      image1: star1,
      text: "Anaerobic digestion",
    },
    {
      image1: star1,
      text: "Micro combined heat and power (CHP)",
    },
  ];
  const solarParagraph = [
    {
      image: solar,
    },
    {
      image: Hydro,
    },
    {
      image: wind,
    },
    {
      image: Anaer,
    },
    {
      image: Micro,
    },
  ];
  const smartParagph = [
    {
      image1: star1,
      text: "A smart meter or half-hourly export meter reading. SEG licensees need up-to-date meter readings to process your application.",
    },
    {
      image1: star1,
      text: "Your MCS certification (or equivalent)",
    },
    {
      image1: star1,
      text: "Your proof of ownership. Most licensees stipulate that SEG tariff recipients must be the system owner.",
    },
    {
      image1: star1,
      text: "The application form. This can be found on the SEG licensee’s website.",
    },
    {
      image1: star1,
      text: "For anaerobic digestion, a separate, additional form. This can be found on Ofgem’s website.",
    },
  ];
  // const TabelChart = [
  //   {
  //     T1: "Electricity Supplier",
  //     T2: "License Type",
  //     T3: "Tariff Type",
  //   },
  // ];
  return (
    <MainInfo>
      <div className={"container"}>
        <div>
          <p className={classes.mainP}>
            SEG & <span className={classes.mainSpan}>Export rates</span>
          </p>
          <p className={classes.innerP}>Smart Export Guarantee</p>
        </div>
        <div>
          <p>What Is the Smart Export Guarantee?</p>
          <p>
            In June of 2019, the UK set a goal to reach net-zero carbon
            emissions by 2050. As part of pursuing that target, on 1 January
            2020, the government instituted the Smart Export Guarantee (SEG)
            scheme. You might have heard of it already, but do you know what it
            entails and how you can qualify?
          </p>
          <p>
            The SEG offers export tariffs for a variety of small-scale
            low-carbon energy generating technologies, as a means to encourage
            UK homeowners to pursue renewable energy. The Feed-in Tariff ended
            in 2019, and this new scheme replaces the FIT programme. Whether you
            already receive FIT payments or are new to renewables, you should
            learn about the SEG.
          </p>
          <p>
            Under the SEG, energy companies will offer you tariffs for the
            renewable energy you export to the National Grid. You must meet some
            criteria to receive these tariffs, though. Both of these schemes
            encourage the uptake of domestic green energy use.
          </p>
        </div>
        <div>
          <p>What Do I Need to Qualify for the SEG?</p>
          <p>
            The SEG provides export tariffs for a variety of small-scale,
            low-carbon energy generation technologies for UK homeowners.
            Specifically, the SEG covers:
          </p>
          <p>
            In June of 2019, the UK set a goal to reach net-zero carbon
            emissions by 2050. As part of pursuing that target, on 1 January
            2020, the government instituted the Smart Export Guarantee (SEG)
            scheme. You might have heard of it already, but do you know what it
            entails and how you can qualify?
          </p>
        </div>
        <div>
          <ul>
            {mainsolar.map((item) => (
              <div key={item}>
                <div className={classes.outerMap}>
                  <img src={item.image1} />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <p>
            The total capacity for the first four categories cannot exceed 5MW
            to qualify for the SEG. For Micro CHP, on the other hand, the max is
            50kW. No matter what kind of system you have, you also need to have
            an export meter.
          </p>
          <p>
            Smart meters make it more convenient for you, as they take
            measurements every half hour and automatically send the readings to
            your SEG licensee. If you have to take readings manually, discuss
            with your licensee how that will work.
          </p>
          <p>
            Here's a closer look at each one of the included technologies under
            the SEG.
          </p>
        </div>
        <div>
          <ul className={classes.mapOuter}>
            {solarParagraph.map((item) => (
              <div>
                <img src={item.image} className={classes.mapImage} />
              </div>
            ))}
          </ul>
        </div>
        <div>
          <p>Solar Photovoltaic Systems</p>
          <p>
            Solar energy is one of the most popular ways to generate low-carbon
            energy. There are no requirements about what kind of photovoltaic
            systems you need in order to qualify, as long as they create less
            than 5MW of electricity. That said, you do need to prove your solar
            installation is MCS certified.
          </p>
          <p>
            What that certification looks like varies depending on your energy
            supplier. Under the SEG, different licensees can choose how they
            certify installations. To find out what criteria you need to meet,
            talk to whichever SEG licensee you want to go with.
          </p>
          <p>
            For systems less than 50kW, you also have to prove your installer is
            certified. Most domestic solar panel systems fall under this
            category. The most common sizes are 4kW systems, 5kW systems, or 6kW
            systems.
          </p>
          <p>
            If you have a microgeneration certification scheme (MCS)
            certificate, that will qualify. If not, your installation and
            installer must have EN 45011 or EN ISO/IEC 17065:2012 accreditation.
          </p>
        </div>
        <div>
          <p>How Does the SEG Work With Solar Battery Storage?</p>
          <p>
            If you're familiar with solar power, you probably know about the
            advantages of solar battery storage. Without these storage
            solutions, you can only use electricity from solar panels during the
            day. With batteries, however, you can store this energy to use at
            any time — for example, during the evening when the sun has gone
            down.
          </p>
          <p>
            The SEG is an export tariff, so you only get money for what you sell
            to the grid. If you store your excess solar energy in batteries, you
            won't get any tariffs for it.
          </p>
          <p>
            However, solar storage is covered by the SEG in some instances,
            meaning that if you export stored energy you could still qualify for
            the export tariff. This differs with suppliers, though, so be sure
            to consult your licensee first.
          </p>
        </div>
        <div>
          <p>Hydropower</p>
          <p>
            Hydropower, energy that you generate from water, is another popular
            choice for renewable electricity. It is far less common than solar
            power, though. According to Ofgem, hydropower schemes generate 1.5%
            of the country’s electricity — largely from large-scale systems.
          </p>
          <p>
            That's not to say you shouldn't pursue these technologies on a
            domestic level, though. The UK has been a world leader in
            hydroelectricity for about as long as the technology has been
            around. If you live in Wales or Scotland, these technologies might
            be particularly advantageous to you.
          </p>
          <p>
            If you want SEG tariffs for hydropower, you have to meet the same
            requirements for solar power of more than 50kW. You need to provide
            an installation certification, but don't need any such proof
            regarding your installer. There are no differences in the
            requirements for hydro systems of less than 50kW
          </p>
        </div>
        <div>
          <p>Wind Power</p>
          <p>
            Wind is the UK's leading renewable power source, accounting for 20%
            of energy generation in late 2019. Most of it comes from large-scale
            farms, but you can still use it at home. The equipment may be more
            expensive than some other options, but it's still a viable option.
          </p>
          <p>
            As far as qualifications go, wind follows the same rules as solar PV
            under the SEG. For anything under 50kW, you'll need both an
            installation and an installer certification. If your system produces
            between 50kW and 5MW, you will only need to provide proof of the
            installation certification.
          </p>
        </div>
        <div>
          <p>Anaerobic Digestion</p>
          <p>
            Even if you are familiar with renewables, you may not know what
            anaerobic digestion is. This is the process of breaking down organic
            material to produce biogas. You can then use this biogas as an
            energy source that isn't emissions-free but is renewable.
          </p>
          <p>
            Digesters use microorganisms like bacteria to break down materials
            like manure, food waste, and wastewater. When these organisms
            interact with these materials in an oxygen-free environment, they
            produce natural gas, which is mostly methane. It may be an uncommon
            process for residential use but is ideal for farmers.
          </p>
          <p>
            The SEG treats anaerobic digestion the same way it does hydropower.
            No matter how little you generate, you only need an installation
            certification. You will, however, need to provide additional
            documents to prove your system complies with SEG guidelines.
          </p>
        </div>
        <div>
          <p>Micro Combined Heat and Power (CHP)</p>
          <p>
            Micro combined heat and power is a system that generates electricity
            and warmth at the same time. It's not always carbon-free, but since
            they accomplish these two tasks at once, it reduces emissions. A lot
            of businesses use CHP since it can significantly reduce both energy
            costs and environmental impact.
          </p>
          <p>
            Reciprocating internal combustion engines are one of the most
            popular micro CHP technologies. Many of these run on natural gas to
            make them even more environmentally-friendly. Fuel cells are another
            type of micro CHP, but you don't see them as often.
          </p>
          <p>
            Micro CHP technologies only qualify for Smart Export Guarantee
            tariffs if their capacity is 50kW or less. Like with solar and wind
            power, if your micro CHP system generates less than 50kW, you will
            need both an installer and an installation certification.
          </p>
        </div>
        <div>
          <p>How Much Can You Make Selling Energy Back to the Grid?</p>
          <p>
            Although the SEG is replacing the Feed-in Tariff, it doesn't offer
            the same rewards for the energy you generate. While the Feed-in
            Tariff included both export and generation tariffs, the SEG only
            provides the former. In other words, you only get tariffs for the
            renewable energy you don't use.
          </p>
          <p>
            How much you can get through these export tariffs varies depending
            on your SEG licensee. The Smart Export Guarantee scheme allows
            companies to decide their own rates, as long as it's more than zero.
            Currently, you can get between 2-5.6p per kWh.
          </p>
        </div>
        <div>
          <div>
            <p>SEG Licensees and Export Tariffs</p>
          </div>
          <div>
            <table className={"table table-bordered"}>
              <thead className={classes.Tablemain}>
                <tr>
                  <th scope="col">Electricity Supplier</th>
                  <th scope="col">License Type</th>
                  <th scope="col">Tariff Type</th>
                  <th scope="col">Tariff Name</th>
                  <th scope="col">
                    <p>Tariff Rate</p> <p>(p/kWh)</p>
                  </th>
                  <th scope="col">Payment Frequency</th>
                  <th scope="col">Battery Storage Export</th>
                </tr>
              </thead>
              <tbody className={classes.bodyMain}>
                <tr>
                  <th scope="row">
                    <p className={classes.backTabel}>Social Energy</p>
                  </th>
                  <td>
                    <p>Voluntary</p>
                  </td>
                  <td>
                    <p>Variable</p>
                  </td>
                  <td>
                    <p>Smarter Export</p>
                  </td>
                  <td>
                    <p>5.6p</p>
                  </td>
                  <td>
                    <p>Monthly</p>
                  </td>
                  <td>
                    <p>Yes</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>Octopus Energy</p>
                  </th>
                  <td>
                    <p>Octopus Energy</p>
                  </td>
                  <td>
                    <p>Fixed & Variable</p>
                  </td>
                  <td>
                    <p>Outgoing Octopus</p>
                  </td>
                  <td>
                    <p>Fixed: 5.5p Variable: ½ hr rate</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>E.ON</p>
                    <p>(also available for Npower customers)</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>Fixed & Export</p>
                  </td>
                  <td>
                    <p>5.5p</p>
                  </td>
                  <td>
                    <p>12 months</p>
                    <p>(3 months possible)</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>Bulb</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>Vari-Fair</p>
                  </td>
                  <td>
                    <p>5.38p</p>
                  </td>
                  <td>
                    <p>3 months</p>
                  </td>
                  <td>
                    <p>3 months</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>SO Energy</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>Smart Export Tariff</p>
                  </td>
                  <td>
                    <p>5p</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>OVO Energy</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>OVO SEG Tariff</p>
                  </td>
                  <td>
                    <p>4p</p>
                  </td>
                  <td>
                    <p>3 months</p>
                  </td>
                  <td>
                    <p>Case by case</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>Scottish Power</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>Smart Export Variable</p>
                  </td>
                  <td>
                    <p>4p</p>
                  </td>
                  <td>
                    <p>6 months</p>
                  </td>
                  <td>
                    <p>No</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p>EDF Energy</p>
                  </th>
                  <td>
                    <p>Mandatory</p>
                  </td>
                  <td>
                    <p>Fixed</p>
                  </td>
                  <td>
                    <p>Export+Earn</p>
                  </td>
                  <td>
                    <p>3.5p</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                  <td>
                    <p>Unknown</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p></p>
                  </th>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <p></p>
                  </th>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p>How Do You Apply for the SEG?</p>
          <p>
            Applying for the SEG is not a complicated process. There are a few
            things you should have collected before submitting your application,
            though, so spend enough time preparing.
          </p>
          <p>
            The first thing you need to do in applying is search for a SEG
            licensee in your area. The SEG licensee can be different than your
            energy supplier. Since they can offer different rates, you may want
            to compare a few options.
          </p>
          <p>
            Before you file any paperwork, make sure you meet all the
            qualifications. As previously mentioned, some of these vary between
            licensees, so the process will look different depending on which one
            you pick.
          </p>
          <p>
            Prepare all the required information and documents beforehand,
            namely:
          </p>
          <div>
            <ul>
              {smartParagph.map((item) => (
                <div className={classes.smarDiv}>
                  <img src={item.image1} />
                  <p>{item.text}</p>
                </div>
              ))}
            </ul>
          </div>
          <p>
            Once your application has been submitted, you should expect 28 days
            of processing time.
          </p>
          <p>
            Your SEG licensee may have to inspect your system before accepting
            your application.
          </p>
        </div>
        <div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  When Does the SEG Go Into Effect?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  The SEG went into effect on 1 January 2020. Many companies are
                  already offering export tariffs, and more will likely come.
                  Energy suppliers with at least 150,000 domestic customers must
                  provide a tariff, whereas suppliers with fewer customers than
                  that can offer export tariffs on a voluntary basis.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  When Does the SEG Go Into Effect?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              ></div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  When Does the SEG Go Into Effect?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              ></div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  When Does the SEG Go Into Effect?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              ></div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  When Does the SEG Go Into Effect?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </MainInfo>
  );
};

export default seg;
