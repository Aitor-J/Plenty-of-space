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
    path: "/",
    img: mercure,
    blur: mercureb,
  },
  {
    path: "/",
    img: venus,
    blur: venusb,
  },
  {
    path: "/",
    img: earth,
  },
  {
    path: "/homebody/mars",
    img: mars,
    blur: marsb,
  },
  {
    path: "/",
    img: jupiter,
    blur: jupiterb,
  },
  {
    path: "/",
    img: saturn,
    blur: saturnb,
  },
  {
    path: "/",
    img: uranus,
    blur: uranusb,
  },

  {
    path: "/",
    img: neptune,
    blur: neptuneb,
  },
];

export default planetNav;
