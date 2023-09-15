import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Hosts from "./components/Hosts/Hosts";
import Planets from "./components/Planets/Planets";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [searchForm, setSearchForm] = useState([]);
  const [resultSearchs, setResultSearchs] = useState([]);

  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm
          ca={"Look for the best space travels in the universe"}
          data={searchForm}
          resultDataFilter={setResultSearchs}
        />
      </Hero>
      {resultSearchs.length >= 1 ? (
        <SearchResults dataFilter={resultSearchs} />
      ) : (
        <>
          <Planets onUpdatePlanets={setSearchForm} />
          <Hosts />
        </>
      )}
    </>
  );
}

export default App;
