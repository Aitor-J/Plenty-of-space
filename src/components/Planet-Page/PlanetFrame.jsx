import Background from "./components/Background";
import Banner from "./components/bannerInfo";

function PlanetFrame() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Background />
      <Banner />
    </div>
  );
}

export default PlanetFrame;
