import PropTypes from "prop-types";
import "./Hero.css";
const Hero = ({ alignTitle, children, title }) => {
  // console.log(alignTitle);
  // console.log(children);
  // console.log("rigth" && children);
  return (
    <section className="hero">
      {/* //compara ejemplo para entender
       "a"=="a" && "aparece este texto" --> 'aparece este texto'
      "a" == "b" && "no aparece el texto"--> false*/}
      {alignTitle == "right" && children}
      <h1>{title}</h1>
      {alignTitle == "left" && children}
    </section>
  );
};

Hero.propTypes = {
  alignTitle: PropTypes.string,
  children: PropTypes.object,
  title: PropTypes.string,
};

export default Hero;
