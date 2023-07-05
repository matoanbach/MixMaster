import React, { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CockTailList from "../components/CocktailList";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async () => {
  const searchTerm = "";
  try {
    const response = await axios.get(`${url}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  } catch (error) {
    console.log(error);
  }
};



function Landing() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <CockTailList drinks={drinks} />
    </>
  );
}

export default Landing;
