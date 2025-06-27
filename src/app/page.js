import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ServiceInfo from "../components/ServiceInfo";
import HighlightProject from "../components/HighlightProject"
export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Slider/>
      <ServiceInfo/>
      <HighlightProject/>
    </>
  );
}
