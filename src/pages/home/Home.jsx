import React, { useState } from "react";
import "./home.scss";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import noFood from "../../assets/waitForFood.jpg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null); // Initially, recipes is set to null
  // Meal types
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks", "Tea Time"];
  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;

  const url = `https://api.edamam.com/search?q=${query}&
  app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}
  `;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits); // Set recipes based on API response
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />

      {/* If recipes is null, show the no food image */}
      {recipes === null && (
        <div>
          <img src={noFood} alt="No food available" className="food-image" />
        </div>
      )}

      {/* If there are no results, display a message */}
      {recipes?.length === 0 && (
        <h1>Sorry, no recipes found. Try another search term.</h1>
      )}

      {/* If there are recipes, display the Card component */}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
