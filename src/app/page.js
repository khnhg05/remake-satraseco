import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ServiceInfo from "../components/ServiceInfo";
import HighlightProject from "../components/HighlightProject"
import History from "../components/History"
import HighlightNumeric from "../components/HighlightNumeric";
import News from "../components/News";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Slider/>
      <ServiceInfo/>
      <HighlightProject/>
      <History/>
      <HighlightNumeric/>
      <News/>
      <About/>
      <Footer/>
    </>
  );
}
