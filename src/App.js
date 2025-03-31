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
import Novels from "./Components/Home/Novels";
import Grocery from "./Components/Home/Grocery";



export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Language/>
        <Categorys />
        <Novels/>
        <Grocery/>
        <ForBusinesses />
        <FAQS />
     
        <ContactUs />
        <Download/>
        <Fotter/>
      </BrowserRouter>
    </div>
  );
}
