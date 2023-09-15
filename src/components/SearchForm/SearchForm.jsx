import PropTypes from "prop-types";
import "./SearchForm.css";
import { useState } from "react";
const SearchForm = ({ ca, data, resultDataFilter }) => {
  //data tiene toda la informacion
  //crearemos varaibles de estado por cada text que sera para buscar
  //variable de estado name
  const [name, setName] = useState("");
  //variable de estado terrain
  const [terrain, setTerrain] = useState("");
  //variable de estado climate
  const [climate, setClimate] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    // en string tambien existe le includes
    // "abcd".includes("c") => true
    const hasName =
      name.length >= 1
        ? data.filter((planet) =>
            planet.name.toUpperCase().includes(name.toUpperCase())
          )
        : data;

    const hasTerrain =
      terrain.length >= 1
        ? hasName.filter((planet) => planet.terrain.includes(terrain))
        : hasName;

    const hasClimate =
      climate.length >= 1
        ? hasTerrain.filter((planet) => planet.climate.includes(climate))
        : hasTerrain;

    resultDataFilter(hasClimate);
  };

  return (
    <form className="search-form" onSubmit={submitForm}>
      <p>{ca}</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="terrain">Terrain</label>
        <input
          type="text"
          id="terrain"
          name="terrain"
          onChange={(e) => setTerrain(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="climate">Climate</label>
        <input
          type="text"
          id="climate"
          name="climate"
          onChange={(e) => setClimate(e.target.value)}
        />
      </div>
      <button>Help me to search</button>
    </form>
  );
};

SearchForm.propTypes = {
  ca: PropTypes.string,
  data: PropTypes.array,
  resultDataFilter: PropTypes.func,
};

export default SearchForm;
