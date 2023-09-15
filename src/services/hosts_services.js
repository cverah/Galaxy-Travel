import { BASE_URI } from "../utils/constans";

async function getHosts() {
  const response = await fetch(BASE_URI + "people");
  if (response.ok) {
    return response.json();
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
}

export default getHosts;
