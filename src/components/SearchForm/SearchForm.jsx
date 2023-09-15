import PropTypes from "prop-types";
import "./SearchForm.css";
const SearchForm = ({ ca }) => {
  return (
    <form className="search-form">
      <p>{ca}</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="terrain">Terrain</label>
        <input type="text" id="terrain" name="terrain" />
      </div>
      <div>
        <label htmlFor="climate">Climate</label>
        <input type="text" id="climate" name="climate" />
      </div>
      <button>Help me to search</button>
    </form>
  );
};

SearchForm.propTypes = {
  ca: PropTypes.string,
};

export default SearchForm;
