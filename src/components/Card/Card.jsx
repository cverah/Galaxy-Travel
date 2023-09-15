import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
Card.propTypes = {
  children: PropTypes.object,
};
