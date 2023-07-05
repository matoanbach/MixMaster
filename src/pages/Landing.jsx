import React, { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "this is the data from landing page";
};

function Landing() {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
}

export default Landing;
