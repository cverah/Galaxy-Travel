import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm ca={"Look for the best space travels in the universe"} />
      </Hero>
    </>
  );
}

export default App;
