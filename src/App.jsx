import "./App.css";
// import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterBar";
import HomeBody from "./components/HomeBody";
import Contact from "./components/Contact";
import HomeFrame from "./components/House-Page/HomeFrame";

// const background = {
//   text: "Wormhole",
//   image: "bg-[url('./src/assets/wormhole.jpg')]",
// };

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <HomeBody {...background} /> */}
      {/* <Footer /> */}
      <Contact />
      {/* <HomeFrame {...house[0]} /> */}
    </div>
  );
}

export default App;
