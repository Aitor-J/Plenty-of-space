const splitPlanet = (namePlanet) => {
  return namePlanet.split("/", [1]);
};
const formatProps = (nameProps) => {
  return nameProps.replace(/([A-Z])/g, "_");
};

const renameKey = (obj) => {
  // transform object in array
  return (
    Object.entries(obj)
      // make a map to format the key (array[0]) in camelCase and i put this logic in an array
      .map((array) => [
        array[0]
          // delete all "_"
          .split("_")
          .map((word, index) =>
            // if word's position is over zéro, change the first letter to upper case else return just the word
            index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
          )
          .join(""),
        array[1],
      ])
      .reduce((acc, curr) => {
        const [key, value] = curr;
        // Assign key and value
        // to the accumulator
        acc[key] = value;
        // Return the accumulator
        return acc;
      }, {})
  );
};

export default { splitPlanet, formatProps, renameKey };
