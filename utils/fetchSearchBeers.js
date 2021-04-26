import debounce from "lodash.debounce";
import { BACKEND_URL_FOR_DEV } from "@env";

import showErrorInDevelopment from "./showErrorInDevelopment";
import generateHeaderOption from "./generateHeaderOption";

const fetchSearchBeers = debounce(
  async (searchText, idToken, setSearchedBeers) => {
    try {
      const headers = generateHeaderOption(idToken);
      const response = await fetch(
        `${BACKEND_URL_FOR_DEV}/beers/search/?text=${encodeURI(searchText)}`,
        {
          headers,
        }
      );
      const searchedBeers = await response.json();
      const managedSearchedBeers = searchedBeers.map((beer) => {
        return {
          id: beer._id,
          name: beer.name,
          description: beer.description.slice(0, 25) + "...",
          imagePath: beer.imagePath,
        };
      });
      setSearchedBeers(managedSearchedBeers);
    } catch (err) {
      showErrorInDevelopment("Faild search beer ", err);
      setSearchedBeers([]);
    }
  },
  300
);

export default fetchSearchBeers;
