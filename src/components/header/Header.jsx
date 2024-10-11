import React from "react";
import "./header.scss";

const Header = ({
  query,
  setQuery,
  selectedMeal,
  setSelectedMeal,
  mealTypes,
  getData,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="header-wrapper">
      <h1>Reciepe App</h1>
      <div className="search-wrapper">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">Search</button>
          <select
            name="mealType"
            id="mealType"
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealTypes.map((mealType, index) => (
              <option value={mealType} key={index}>
                {mealType}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
