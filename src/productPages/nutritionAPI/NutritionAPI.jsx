import React from "react";
import "./nutritionapi.scss";

const NutritionAPI = () => {
  return (
    <div className="product-detail">
      <section className="products">
        <h2>
          Food and Grocery Database API With Natural Language Processing (NLP)
        </h2>
      </section>



      <section className="pricing">
        <h2>Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Developer</th>
              <th>Enterprise Core</th>
              <th>Enterprise Unlimited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly fee</td>
              <td>Free</td>
              <td>$69 per month</td>
              <td>Custom</td>
            </tr>
            <tr>
              <td>AI Assistant fee</td>
              <td>Free</td>
              <td>$0.0010/$0.0020 for 1K tokens outbound/inbound</td>
              <td>$0.0010/$0.0020 for 1K tokens outbound/inbound</td>
            </tr>
            <tr>
              <td>Data caching allowed?</td>
              <td>No</td>
              <td>Protein, net carbs, total fat, kcal</td>
              <td>Custom</td>
            </tr>
            <tr>
              <td>Full recipes analyzed monthly</td>
              <td>400 recipes/month</td>
              <td>50,000 recipes/month</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>Recipe submissions per minute</td>
              <td>10 per minute</td>
              <td>150 per minute</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>Text Analysis hits monthly</td>
              <td>4000 lines/month</td>
              <td>100,000 lines/month</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>Text Analysis hits per minute</td>
              <td>20 per minute</td>
              <td>300 per minute</td>
              <td>Unlimited*</td>
            </tr>
            <tr>
              <td>AI Assistant</td>
              <td>30 calls/10,000 inbound tokens per day</td>
              <td>10 calls per minute/200K inbound tokens per day</td>
              <td>30 calls per minute/1 million inbound tokens per day</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="description">
        <h2>Full recipe nutrition analysis</h2>
        <p>
          Submit the full text of any recipe or ingredient list. Edamam will
          extract the full nutrition and ingredient data from the text. No more
          need to spend hours entering your recipes line by line. The nutrition
          analysis takes less than a second!
        </p>

        <h2>Text Analysis</h2>
        <p>
          Our Natural Language Processing engine allows for the extraction of
          food named entities from text. We also allow combined entity
          extraction with food database search. Once a text is submitted and
          entities are extracted, our database is searched for additional food
          matches to the extracted entities.
        </p>

        <h2>Structured Data and Nutrition Data Output</h2>
        <p>
          Edamam returns detailed information for each ingredient line for the
          Recipe Analysis and for each text string for the Text Analysis. You
          can get information for the entire recipe as a whole or broken down
          automatically for each ingredient.
        </p>
      </section>
    </div>
  );
};

export default NutritionAPI;
