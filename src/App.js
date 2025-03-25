import Navbar from "./Common/Navbar";
import { BrowserRouter } from "react-router-dom";
import Categorys from "./Components/Home/Categorys";
import ForBusinesses from "./Components/Home/ForBusinesses";
import Banner from "./Components/Home/Banner";
import ContactUs from "./Components/Home/ContactUs";
import Download from "./Components/Home/Download";
<<<<<<< Updated upstream
import FAQS from "./Components/Home/FAQS";
import Language from "./Components/Home/Language";
=======
import Fotter from "./Common/Fotter"
import Languages from "./Components/Languages";

>>>>>>> Stashed changes

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
<<<<<<< Updated upstream
        <Banner />
=======
        <Banner/>
        <Languages/>
>>>>>>> Stashed changes
        <Categorys />
        <ForBusinesses />
<<<<<<< Updated upstream
        <FAQS />
        <Download />
        <Language/>
        <ContactUs />
=======
        <ContactUs/>
        <Download/>
<Fotter/>
>>>>>>> Stashed changes
      </BrowserRouter>
    </div>
  );
}
