const splitPlanet = (namePlanet) => {
  return namePlanet.split("/", [1]);
};
const formatProps = (nameProps) => {
  return nameProps.replace(/([A-Z])/g, "_");
};

export default { splitPlanet, formatProps };
