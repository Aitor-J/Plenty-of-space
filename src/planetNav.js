import mercure from "./assets/images/1-mercure.png";
import venus from "./assets/images/2-venus.png";
import mars from "./assets/images/3-mars.png";
import jupiter from "./assets/images/4-jupiter.png";
import uranus from "./assets/images/6-uranus.png";
import neptune from "./assets/images/7-neptune.png";
import earth from "./assets/images/3-earth.png";
import mercureb from "./assets/images/1-mercure-blur.png";
import venusb from "./assets/images/2-venus-blur.png";
import marsb from "./assets/images/3-mars-blur.png";
import jupiterb from "./assets/images/4-jupiter-blur.png";
import saturn from "./assets/images/5-saturn.png";
import saturna from "./assets/images/5-saturn-back.jpg";
import saturnb from "./assets/images/5-saturn-blur.png";
import uranusb from "./assets/images/6-uranus-blur.png";
import neptuneb from "./assets/images/7-neptune-blur.png";
import earthb from "./assets/images/3-earth-blur.png";

const planetNav = [
  {
    id: 1,
    name: "mercury",
    subtitle: "Summertime",
    desc: "Don't bother overpacking, there's only one season over there and guess what it's not winter!",
    path: "/homebody/mercury",
    img: mercure,
    blur: mercureb,
    imgb: saturna,
    color: "#F7D389",
  },
  {
    id: 2,
    name: "venus",
    subtitle: "Your Venus, your fire, your desire",
    desc: "Amateur of deep diving, welcome! With an average pressure of 95bar (950 m depth in the Earth's oceans), you will finaly truly live your passion every day, but watch out for headaches!",
    path: "/homebody/venus",
    img: venus,
    blur: venusb,
    imgb: saturna,
    color: "#9F9D9D",
  },
  {
    id: 3,
    name: "earth",
    subtitle: "The flat Earth Society",
    desc: "You are lost my friend, you've made a huge jump space, Lydie invaded Earth with the help of her dinosaurs, while Jimmy was organising the resistance, is there any hope left?",
    path: "/homebody/earth",
    img: earth,
    blur: earthb,
    imgb: saturna,
    color: "#2e4d81",
  },
  {
    id: 4,
    name: "mars",
    subtitle: "Bored of earth ? Red is the new blue",
    desc: "If lush forests, blue skies and singings birds are not your cup of tea, but if 14-mile-high trecks and red sands are, then you're in the right spot.",
    path: "/homebody/mars",
    img: mars,
    blur: marsb,
    imgb: saturna,
    color: "#E67614",
  },
  {
    id: 5,
    name: "jupiter",
    subtitle: "Big poppa",
    desc: "If you have an extreme fear of night or darkness when it comes to bedtime, no worries, Jupiter's 79 moons will light you safe like a lullaby",
    path: "/homebody/jupiter",
    img: jupiter,
    blur: jupiterb,
    imgb: saturna,
    color: "#BCD2F5",
  },
  {
    id: 6,
    name: "saturn",
    subtitle: "If you liked it then you shoulda put a ring on it",
    desc: "Is there any better place for a proposal ? The rings stretch out more than 120,700 km",
    path: "/homebody/saturn",
    img: saturn,
    blur: saturnb,
    imgb: saturna,
    color: "#8b9daf",
  },
  {
    id: 7,
    name: "uranus",
    subtitle: "The Earth may be flat but Uranus is round",
    desc: "Uranus is cold, Uranus is made of gas, Uranus has violent storms happen at an unexpected times, does this sounds any familiar?",
    path: "/homebody/uranus",
    img: uranus,
    blur: uranusb,
    imgb: saturna,
    color: "#0D6DA5",
  },

  {
    id: 8,
    name: "neptune",
    subtitle: "I wanna be forever young",
    desc: "If 1 Neptune's year is about 165 years on Earth, it would take you 6 months to die there! Never feel old again when they ask your age",
    path: "/homebody/neptune",
    img: neptune,
    blur: neptuneb,
    imgb: saturna,
    color: "#59E5EF",
  },
];

export default planetNav;
