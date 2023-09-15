import PropTypes from "prop-types";
import Card from "../Card/Card";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import { formatNumber } from "../../utils/format_number";
import "../Container/Button.css";
import "../../utils/Util.css";

const SearchResults = ({ dataFilter }) => {
  return (
    <Container title={"Search Planets"}>
      <Grid columns={3} rows={"auto"} gap={"15px"}>
        {dataFilter.map((planet) => (
          <Card key={planet.name}>
            <h2>{planet.name}</h2>
            <div className="horizontal-group">
              <p>Rotation: {planet.rotation_period}</p>
              <p>Orbital: {planet.orbital_period}</p>
              <p>Diameter:{planet.diameter}</p>
            </div>
            <div className="featured-group">
              <div className="featured-item">
                Climate
                <p>{planet.climate}</p>
              </div>
              <div className="featured-item">
                Gravity
                <p>{planet.gravity}</p>
              </div>
              <div className="featured-item">
                Terrain
                <p>{planet.terrain}</p>
              </div>
              <div className="featured-item">
                Surface water
                <p>{planet.surface_water}</p>
              </div>
            </div>
            <p className="center">Population</p>
            <p className="center text-big margin-0">
              {parseInt(planet.population) > 0
                ? formatNumber(planet.population)
                : planet.population}
            </p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

SearchResults.propTypes = {
  dataFilter: PropTypes.array,
};

export default SearchResults;
