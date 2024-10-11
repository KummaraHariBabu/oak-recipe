import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Recipe App</h1>
      <p>
        Welcome to the Recipe Finder App! This application allows you to search for a variety of delicious recipes based on your preferences. Whether you're looking for a quick breakfast, a healthy lunch, or a savory dinner, we've got you covered.
      </p>

      <h2>How to Use the App</h2>
      <ul>
        <li>Search for your favorite dish by typing a keyword, such as "pasta" or "chicken".</li>
        <li>Select the meal type (e.g., Breakfast, Lunch, Dinner) to filter results.</li>
        <li>Click on a recipe to see more details, including ingredients and cooking instructions.</li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>Wide variety of recipes from around the world.</li>
        <li>Filter recipes based on meal type (breakfast, lunch, dinner, snacks, etc.).</li>
        <li>Save your favorite recipes for easy access later.</li>
      </ul>

      <p>
        Our app uses the Edamam API to provide accurate and up-to-date recipe information. Start exploring new recipes today and enjoy cooking!
      </p>
    </div>
  );
};

export default About;
