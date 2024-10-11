import React from "react";
import "./recipeSearchAPI.scss";

const RecipeSearchAPI = () => {
  return (
    <div className="recipe-search-api">
      <section className="api-info">
        <h2>Recipe Search API</h2>
        <p>
          Edamam's Recipe Search API lets you integrate a recipe database and faceted recipe search into your websites or mobile applications.
        </p>
      </section>

      <section className="pricing">
        <h2>Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Developer</th>
              <th>Enterprise Core</th>
              <th>Enterprise Plus</th>
              <th>Enterprise Unlimited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly fee</td>
              <td>Free</td>
              <td>$69 per month</td>
              <td>$299 per month</td>
              <td>Custom per month</td>
            </tr>
            <tr>
              <td>AI Assistant fee</td>
              <td>Free</td>
              <td>$0.0010/$0.0020 per 1K tokens outbound/inbound</td>
              <td>$0.0010/$0.0020 per 1K tokens outbound/inbound</td>
              <td>Custom</td>
            </tr>
            <tr>
              <td>Included API calls</td>
              <td>10,000/month</td>
              <td>100,000/month</td>
              <td>1,000,000/month</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>Throttling calls/min</td>
              <td>10/minute*</td>
              <td>100/minute*</td>
              <td>300/minute*</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>Results per call</td>
              <td>Up to 100 results</td>
              <td>Up to 1000 results</td>
              <td>Up to 100 results</td>
              <td>Up to 1000 results</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Recipe data (image, ingredients, title)</li>
          <li>Meal/Dish Type and Cuisine filters</li>
          <li>Diet, Health, and Allergy filters (30+ filters)</li>
          <li>Food name, measure, and quantity for ingredients</li>
          <li>Food ID included</li>
          <li>Carbon Footprint: Yes (On request)</li>
          <li>AI Assistant with Open AI's GPT model</li>
          <li>Recipe caching: Recipe ID, Recipe name, Protein, Net carbs, Total fat, Kcal</li>
          <li>Shopping aisle for ingredients</li>
          <li>Full Nutritional Details</li>
        </ul>
      </section>

      <section className="chronic-conditions">
        <h2>Chronic Conditions Tagging and Filtering</h2>
        <p>
          Edamam offers the ability to search the recipe database based on their appropriateness to over 200+ chronic conditions. You can filter for recipes beneficial for conditions like Type 2 Diabetes, kidney disease, hypertension, and more.
        </p>
      </section>

      <section className="description">
        <h2>Data Caching</h2>
        <p>
          Data caching is allowed for some paid API plans when explicitly stated. API subscribers can cache basic macronutrient data points like protein, total fat, net carbs, and calories as well as the recipe URI, recipe title, and recipe image.
        </p>

        <h2>Attribution</h2>
        <p>
          All Edamam plans require attribution by using the image and link provided on their website. For the Recipe Analysis API, attribution must be placed next to the nutrition facts.
        </p>

        <h2>Commercial Use</h2>
        <p>No commercial use allowed for Developer plan.</p>
      </section>
    </div>
  )
};

export default RecipeSearchAPI;
