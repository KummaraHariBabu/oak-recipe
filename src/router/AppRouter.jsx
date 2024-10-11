import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import "./approuter.scss";
import Footer from "../components/footer/Footer";
import NutritionAPI from "../productPages/nutritionAPI/NutritionAPI";
import FoodDatabaseAPI from "../productPages/fooddatabase/FoodDatabaseAPI";
import FAQ from "../productPages/faq/FAQDetails";
import RecipeSearchAPI from "../productPages/recipesearch/RecipeSearchAPI";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
        <Routes>
        <Route path="/nutrition-analysis" element={<NutritionAPI />} />
        <Route path="/food-database" element={<FoodDatabaseAPI />} />
        <Route path="/recipe-search" element={<RecipeSearchAPI />} />
        <Route path="/faq" element={<FAQ />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
