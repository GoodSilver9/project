import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Title from "./Components/Title";
import Menu from "./Components/Menu/Menu";
import Ingredient from "./Components/Menu/Ingredient";
import CookingProcess from "./Components/Cook/CookingProcess";
import Cooking from "./Components/Cooking/Cooking";
import MenuLink from "./Components/MenuLink/MenuLink";
import Compelete from "./Components/Cook/Compelete";

const App = () => {
  return (
    <div>
      <nav>
        <MenuLink to="/title">Title</MenuLink>
        <MenuLink to="/menu">Menu</MenuLink>
        <MenuLink to="/ingredient">Ingredient</MenuLink>
        <MenuLink to="/cooking">Cooking</MenuLink>
        <MenuLink to="/compelete">Compelete</MenuLink>
      </nav>
      <Routes>
        <Route path="/title" element={<Title />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/cookingprocess" element={<CookingProcess />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/compelete" element={<Compelete />} />
      </Routes>
    </div>
  );
};

export default App;
