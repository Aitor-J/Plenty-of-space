const splitPlanet = (namePlanet) => {
  return namePlanet.split("/", [1]);
};
const splitType = (typePlanet) => {
  return typePlanet.split("/", [1]).join("");
};

const formatProps = (nameProps) => {
  return nameProps.replace(/([A-Z])/g, "_");
};

export default { splitPlanet, formatProps, splitType };
