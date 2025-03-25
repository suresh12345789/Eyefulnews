import Navbar from "./Common/Navbar";
import { BrowserRouter } from "react-router-dom";
import Categorys from "./Components/Home/Categorys";
import ForBusinesses from "./Components/Home/ForBusinesses";
import Banner from "./Components/Home/Banner";
import ContactUs from "./Components/Home/ContactUs";
import Download from "./Components/Home/Download";

import FAQS from "./Components/Home/FAQS";
import Language from "./Components/Home/Language"
import Fotter from "./Common/Fotter"



export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Categorys />
        <ForBusinesses />
        <FAQS />
        <Download />
        <Language/>
        <ContactUs />
        <Download/>
        <Fotter/>
      </BrowserRouter>
    </div>
  );
}
