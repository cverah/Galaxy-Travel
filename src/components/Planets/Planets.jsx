import { useEffect } from "react";
import Card from "../Card/Card";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import getPlanets from "../../services/planets-service";

const Planets = () => {
  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      console.log(data);
    };
    fetchPlanets();
  }, []);
  return (
    <Container title={"Planet"}>
      <Grid columns={3} rows={"auto"} gap={"15px"}>
        <Card>
          <h2>title</h2>
          <div className="horizontal-group">
            <p>Rotation: 12</p>
            <p>Orbital: 44</p>
            <p>Diameter:40</p>
          </div>
          <div className="featured-group">
            <div className="featured-item">
              Rotation: 12
              <p>details</p>
            </div>
            <div className="featured-item">
              Orbital: 44
              <p>details</p>
            </div>
            <div className="featured-item">
              Diameter: 40
              <p>details</p>
            </div>
          </div>
          <p className="center">Population</p>
          <p className="center text-big margin-0">200000</p>
        </Card>
        <Card></Card>
        <Card></Card>
      </Grid>
    </Container>
  );
};

export default Planets;
