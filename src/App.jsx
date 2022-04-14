import "./App.css";
// import axios from "axios";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterBar";
import HomeBody from "./components/HomeBody";



const background = {
  text: "Wormhole",
  image: "bg-[url('./src/assets/wormhole.jpg')]",
};





function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBody {...background} />
      <Footer />
     </div>
  );
}

export default App;
