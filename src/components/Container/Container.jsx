import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ title, children }) => {
  return (
    <section className="container">
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
