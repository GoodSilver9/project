import React from "react";
import { Route, Routes } from "react-router-dom";
import Title from "./Components/Title";
import Menu from "./Components/Menu/Menu";
import Ingredient from "./Components/Menu/Ingredient";
import MenuLink from "./Components/MenuLink/MenuLink";
import Compelete from "./Components/Cook/Compelete";
import CookingProcess from "./Components/Cooking/CookingProcess";

const App = () => {
  return (
    <div>
      <nav>
        <MenuLink to="/title">Title</MenuLink>
        <MenuLink to="/menu">Menu</MenuLink>
        <MenuLink to="/ingredient">Ingredient</MenuLink>
        <MenuLink to="/cookingprocess">Cooking</MenuLink>
        <MenuLink to="/compelete">Compelete</MenuLink>
      </nav>
      <Routes>
        <Route path="/title" element={<Title />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ingredient/:menuName" element={<Ingredient />} />
        <Route path="/cookingprocess/:menuName" element={<CookingProcess />} />
        <Route path="/compelete" element={<Compelete />} />
      </Routes>
    </div>
  );
};

export default App;
