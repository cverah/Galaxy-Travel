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
        <Grid columns={4} rows={"200px"} gap={"15px"}></Grid>
      </Container>
    </>
  );
}

export default App;
