import { BASE_URI } from "../utils/constans";

async function getPlanets(nextorprevious) {
  const response = await fetch(nextorprevious || BASE_URI + "planets");
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
}

export default getPlanets;
