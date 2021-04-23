import debounce from "lodash.debounce";
import getHeadersIncludedIdToken from "./getHeadersIncludedIdToken";
import { BACKEND_URL_FOR_DEV } from "@env";

const fetchBeerSearched = async (searchText, idToken, setSearchedBeers) => {
  const headers = getHeadersIncludedIdToken(idToken);
  const response = await fetch(`${BACKEND_URL_FOR_DEV}/beers/search`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ searchText }),
  });

  const searchedBeers = await response.json();
  const processedSearchedBeers = searchedBeers.map((beer) => {
    return {
      id: beer._id,
      name: beer.name,
      description: beer.description.slice(0, 25) + "...",
      imagePath: beer.imagePath,
    };
  });
  setSearchedBeers(processedSearchedBeers);
};

const debouncedFetchSearchedBeers = debounce(fetchBeerSearched, 300);

export default debouncedFetchSearchedBeers;
