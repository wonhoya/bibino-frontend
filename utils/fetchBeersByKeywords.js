import debounce from "lodash.debounce";
import { BACKEND_URL_FOR_DEV } from "@env";

import generateHeaderOption from "./generateHeaderOption";

const fetchBeersByKeywords = debounce(
  async (searchText, idToken, setSearchedBeers) => {
    const headers = generateHeaderOption(idToken);
    const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/search`, {
      headers: { ...headers, "search-text": searchText },
    });

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
  },
  300
);

export default fetchBeersByKeywords;
