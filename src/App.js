import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "../src/aboutSection/Aboutus";
import Mission from "./aboutSection/Mission";
import Partner from "./aboutSection/partner";
import Seg from "./Info/seg";
import Form from "./aboutSection/Form";
import Grants from "./Info/Grants";
import Planning from "./Info/planning";
import Finance from "./solarSection/Finance";
import Support from "./solarSection/support";
import Service from "./solarSection/Service";
import Product from "./solarSection/Product";
import Tarrif from "./Tarrif/Tarrif";
import CompareDeals from "./CompareMain/CompareDeals";
import Cart from "./Cart/Cart";
import MainHeader from "./components/MainHeader";
import Property from "./Tarrif/Property";
import Change from "./Tarrif/Change";
import FooterMain from "./components/Footer";
import Planet from "./Tarrif/Planet";
import Money from "./CompareMain/Home";
import Deal from "./CompareMain/Deals";
import Owner from "./CompareMain/Owner";
import System from "./CompareMain/System";
import Number from "./CompareMain/Number";
import Detach from "./CompareMain/Detach";
import Roof from "./CompareMain/Roof";
import Usage from "./CompareMain/Usage";
import Plan from "./CompareMain/Plan";
import Design from "./CompareMain/Design";
import Cost from "./CompareMain/Cost";
import Create from "./CompareMain/Create";
import Map from "./CompareMain/Map";
import Kit from "./CompareMain/Kit";
import Panel from "./CompareMain/Panel";
import Offer from "./CompareMain/Offer";
import Break from "./CompareMain/Break";
import Process from "./solarSection/Process";
import Name from "./Model/Name";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        children:[
        {/* <Route path="/MainHeader" element={MainHeader} /> */}
        <Route path="/Process" element={<Process />} />
        <Route path="/Break" element={<Break />} />
        <Route path="/Name" element={<Name />} />
        {/* <Route path="/Model" element={<Model />} /> */}
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Panel" element={<Panel />} />
        <Route path="/Kit" element={<Kit />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Cost" element={<Cost />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/Usage" element={<Usage />} />
        <Route path="/Roof" element={<Roof />} />
        <Route path="/Detach" element={<Detach />} />
        <Route path="/Number" element={<Number />} />
        <Route path="/System" element={<System />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/seg" element={<Seg />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Grants" element={<Grants />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Tarrif" element={<Tarrif />} />
        <Route path="/CompareDeals" element={<CompareDeals />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MainHeader" element={<MainHeader />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Change" element={<Change />} />
        <Route path="/Planet" element={<Planet />} />
        <Route path="/Money" element={<Money />} />
        <Route path="/Deals" element={<Deal />} />
        <Route path="/Owner" element={<Owner />} />]
      </Routes>
      {/* <FooterMain /> */}
    </Router>
  );
}

export default App;
