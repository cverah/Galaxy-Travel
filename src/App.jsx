import Container from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm ca={"Look for the best space travels in the universe"} />
      </Hero>
      <Container title={"Planet"}>sdsd</Container>
      <Container title={"Hosts"}> este texto </Container>
      <Container>hola</Container>
    </>
  );
}

export default App;
