import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const fetchData = (searchTerm) => {
  return {
    queryKey: ["cocktail", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("search") || "";

    await queryClient.ensureQueryData(fetchData(searchTerm));
    return { searchTerm };

  };
function Landing() {
  const { searchTerm } = useLoaderData();
  const { data } = useQuery(fetchData(searchTerm));

  const drinks = data.drinks;
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
