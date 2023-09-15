import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Grid from "./components/Grid/Grid";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm ca={"Look for the best space travels in the universe"} />
      </Hero>
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
    </>
  );
}

export default App;
