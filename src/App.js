import Navbar from "./Common/Navbar";
import { BrowserRouter } from "react-router-dom";
import Categorys from "./Components/Home/Categorys";
import ForBusinesses from "./Components/Home/ForBusinesses";
import Banner from "./Components/Home/Banner";
import ContactUs from "./Components/Home/ContactUs";
import Download from "./Components/Home/Download";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Categorys />

        <ForBusinesses />
        <ContactUs/>
        <Download/>

      </BrowserRouter>
    </div>
  );
}
