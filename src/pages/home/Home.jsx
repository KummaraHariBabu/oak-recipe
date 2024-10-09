import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error", error);
    }
  };
  console.log(recipes);
  useEffect(() => {
    getData();
  }, []); // Add dependency array to avoid infinite requests

  return (
    <div>
        <Header />
        <Card />

    </div>
  );
};

export default Home;
