import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PlanetLink = ({ path, img }) => {
  return (
    <Link to={path}>
      <div className="flex justify-around transition duration-1000 ease-in-out hover:brightness-150 white hover:scale-150">
        <img
          className="justify-center w-1/2 h-full p-0 m-0 w-object-cover animate-spinslow "
          src={img}
          alt="logo plenty of space"
        />
      </div>
    </Link>
  );
};
PlanetLink.propTypes = {
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default PlanetLink;
