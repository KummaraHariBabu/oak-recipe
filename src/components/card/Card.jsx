import React from "react";
import defaultImg from "../../assets/foodImg.avif";
import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      {recipes.map(({ recipe }, index) => {
        let { label, image } = recipe;
        return (
          <div className="card">
            <h1 key={index}>{label}</h1>
            <img src={image ? image : defaultImg} alt="Food" />
            <button onClick={() => navigate("detail", { state: recipe })}>
              More Detail
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
