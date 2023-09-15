import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Hosts from "./components/Hosts/Hosts";
import Planets from "./components/Planets/Planets";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [searchForm, setSearchForm] = useState([]);
  const [resultSearchs, setResultSearchs] = useState([]);
  console.log(resultSearchs);
  return (
    <>
      <Hero title={"Galaxy Travel"} alignTitle={"right"}>
        <SearchForm
          ca={"Look for the best space travels in the universe"}
          data={searchForm}
          resultDataFilter={setResultSearchs}
        />
      </Hero>
      <Planets onUpdatePlanets={setSearchForm} />
      <Hosts />
    </>
  );
}

export default App;
