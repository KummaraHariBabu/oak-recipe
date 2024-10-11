import React from "react";
import "./foodDatabaseAPI.scss";

const FoodDatabaseAPI = () => {
  return (
    <div className="food-database-api">


      <section className="api-info">
        <h2>Food and Grocery Database API</h2>
        <p>
          With Natural Language Processing (NLP), the Food API uses Edamam's proprietary natural language analysis engine to process your search queries and extract food entities along with their quantities.
        </p>
      </section>

      <section className="pricing">
        <h2>Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Enterprise Basic</th>
              <th>Enterprise Core</th>
              <th>Enterprise Plus</th>
              <th>Enterprise Unlimited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly fee</td>
              <td>$9 per month</td>
              <td>$69 per month</td>
              <td>$299 per month</td>
              <td>Custom per month</td>
            </tr>
            <tr>
              <td>Free Trial</td>
              <td>30 days</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>AI Assistant fee</td>
              <td>Free</td>
              <td>$0.0010/$0.0020 for 1K tokens outbound/inbound</td>
              <td>$0.0010/$0.0020 for 1K tokens outbound/inbound</td>
              <td>$0.0010/$0.0020 for 1K tokens outbound/inbound</td>
            </tr>
            <tr>
              <td>Included API calls</td>
              <td>100,000 calls/month</td>
              <td>750,000 calls/month</td>
              <td>5,000,000 calls/month</td>
              <td>unlimited**</td>
            </tr>
            <tr>
              <td>Throttling</td>
              <td>Food and Nutrition requests: 50 per minute</td>
              <td>100 per minute</td>
              <td>300 per minute**</td>
              <td>unlimited**</td>
            </tr>
            <tr>
              <td>UPC requests</td>
              <td>50 per minute</td>
              <td>100 per minute</td>
              <td>300 per minute**</td>
              <td>unlimited**</td>
            </tr>
            <tr>
              <td>Autocomplete requests</td>
              <td>50 per minute</td>
              <td>500 per minute</td>
              <td>300 per minute**</td>
              <td>unlimited**</td>
            </tr>
            <tr>
              <td>AI Assistant</td>
              <td>30 calls/10,000 inbound tokens per day</td>
              <td>10 calls per minute/200K inbound tokens per day</td>
              <td>30 calls per minute/1 million inbound tokens per day</td>
              <td>Custom</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="features">
        <h2>Included in All Plans</h2>
        <ul>
          <li>Natural Language Processing (NLP)</li>
          <li>AI Assistant with Open AI's GPT model</li>
          <li>Close to 900,000 common foods, restaurant menu items, and grocery products</li>
          <li>615,000 unique UPCs/barcodes</li>
          <li>130,000 branded restaurant items</li>
          <li>
            100,000 Common foods, including:
            <ul>
              <li>90,000 generic meals</li>
              <li>10,000 generic foods</li>
            </ul>
          </li>
          <li>UPC/Barcode Search</li>
          <li>Autocomplete</li>
          <li>70+ Diet, Allergy, and Nutrition filters</li>
          <li>Parser response with measure weight</li>
        </ul>
      </section>

      <section className="description">
        <h2>Data Caching</h2>
        <p>
          Data caching is allowed for some paid API plans when explicitly stated by the plan’s terms. API customers can cache the four basic macro nutrient data points: protein, total fat, net carbs, and calories, as well as the foodId and food label. Caching is restricted to the end user’s account.
        </p>

        <h2>Commercial Use</h2>
        <p>
          All Edamam plans require attribution. You can find more information on the requirements in the API Terms of Use.
        </p>

        <h2>Low-cost Solution</h2>
        <p>
          Edamam provides free Food API access with its basic plan for developers, startups, and non-profits alike. Custom packages are also available for enterprise customers.
        </p>
      </section>
    </div>
  );
};

export default FoodDatabaseAPI;
