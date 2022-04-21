import Background from "./components/Background";
import Banner from "./components/bannerInfo";
import FooterInfo from "./components/FooterInfos";
import NavPlanet from "./components/NavPlanet";

function PlanetFrame() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Background />
      <Banner />
      <FooterInfo />
      <NavPlanet />
    </div>
  );
}

export default PlanetFrame;
