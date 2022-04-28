import mercure from "./assets/images/1-mercure.png";
import venus from "./assets/images/2-venus.png";
import mars from "./assets/images/3-mars.png";
import jupiter from "./assets/images/4-jupiter.png";
import saturn from "./assets/images/saturne.png";
import uranus from "./assets/images/6-uranus.png";
import neptune from "./assets/images/7-neptune.png";
import earth from "./assets/images/earth.png";
import mercureb from "./assets/images/1-mercure-blur.png";
import venusb from "./assets/images/2-venus-blur.png";
import marsb from "./assets/images/3-mars-blur.png";
import jupiterb from "./assets/images/4-jupiter-blur.png";
import saturnb from "./assets/images/5-saturn-blur.png";
import uranusb from "./assets/images/6-uranus-blur.png";
import neptuneb from "./assets/images/7-neptune-blur.png";

const planetNav = [
  {
    id: 1,
    name: "mercury",
    path: "/homebody/mercury",
    img: mercure,
    blur: mercureb,
  },
  {
    id: 2,
    name: "venus",
    path: "/homebody/venus",
    img: venus,
    blur: venusb,
  },
  {
    id: 3,
    name: "earth",
    path: "/homebody/earth",
    img: earth,
    blur: earth,
  },
  {
    id: 4,
    name: "mars",
    path: "/homebody/mars",
    img: mars,
    blur: marsb,
  },
  {
    id: 5,
    name: "jupiter",
    path: "/homebody/jupiter",
    img: jupiter,
    blur: jupiterb,
  },
  {
    id: 6,
    name: "saturn",
    path: "/homebody/saturn",
    img: saturn,
    blur: saturnb,
  },
  {
    id: 7,
    name: "uranus",
    path: "/homebody/uranus",
    img: uranus,
    blur: uranusb,
  },

  {
    id: 8,
    name: "neptune",
    path: "/homebody/neptune",
    img: neptune,
    blur: neptuneb,
  },
];

export default planetNav;
