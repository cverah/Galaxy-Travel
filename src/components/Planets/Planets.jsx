import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import getPlanets from "../../services/planets-service";
import { formatNumber } from "../../utils/format_number";

const Planets = () => {
  // variables de estado planets
  const [planets, setPlanets] = useState([]);
  //varaible de estado para el next

  const [nextPlanets, setNextPlanets] = useState("");

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data.results);
      setNextPlanets(data.next);
    };
    fetchPlanets();
  }, []);

  return (
    <Container title={"Planets"}>
      <Grid columns={3} rows={"auto"} gap={"15px"}>
        {planets.map((planet) => (
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
      <br />
      <br />
      {nextPlanets && <button>Next Planets</button>}
    </Container>
  );
};

export default Planets;
