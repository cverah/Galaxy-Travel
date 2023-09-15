import Hero from "./components/Hero/Hero";
import Planets from "./components/Planets/Planets";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm ca={"Look for the best space travels in the universe"} />
      </Hero>
      <Planets />
    </>
  );
}

export default App;
