import React from "react";
import "./detail.scss";
import meal from "../../assets/meal.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Detail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="detail-wrapper">
      <div className="detail-section">
        <div className="tags">
          <h1>{state.label}</h1>
          <img src={state.image} alt="food" />
        </div>

        <div className="nutrients">
          <h4>nutrients</h4>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>
            Calories: {Math.round(state.calories)}
            {state.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label} : {Math.round(item.total)}
              </p>
            ))}
          </p>
        </div>

        <div className="ingredients">
          <div className="ingredient-values">
            <h4>ingregients</h4>
            {state.ingredientLines.map((ingredient, index) => (
              <div>
                <p key={index}>
                  {index + 1} - {ingredient}
                </p>
              </div>
            ))}
          </div>

          <div className="meal-image">
            <img src={meal} alt="meal" />
          </div>
        </div>
      </div>
      <div className="btn-wrappers">
        <button className="btn1" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn2" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Detail;
