import React, { useState, useEffect } from "react";
import FoodItem from "../Food/FoodItem";
import Cooking from "./Cooking";
import classes from "./CookingProcess.module.css";
import { Button, Menu } from "@mui/material";
import Compelete from "../Cook/Compelete";
import Ingredient from "../Menu/Ingredient";
import MenuLink from "../MenuLink/MenuLink";
import { useParams } from "react-router";

const CookingProcess = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foodIndex, setFoodIndex] = useState(0);

  const { menuName } = useParams();

  const NextFoodIndexHandler = () => {
    setFoodIndex(foodIndex + 1);
  };
  const BeforeFoodIndexHandler = () => {
    setFoodIndex(foodIndex - 1);
  };

  const selectedFood = foods[foodIndex] as any;

  useEffect(() => {
    const fecthFoods = async () => {
      const response = await fetch(
        `https://react-study-project-a16db-default-rtdb.firebaseio.com/${menuName}/cooking.json`
      );

      if (!response.ok) {
        throw new Error("뭔가 잘못됨");
      }

      const responseData = await response.json();

      const loadedFoods = [] as any;

      for (const key in responseData) {
        loadedFoods.push({
          id: key,
          img: responseData[key].img,
          description: responseData[key].description,
        });
      }

      setFoods(loadedFoods);
      setIsLoading(false);
    };

    fecthFoods().catch((error) => {
      setIsLoading(false);
    });
  }, [menuName]);

  if (isLoading) {
    return <div className={classes.container}>로딩중</div>;
  }

  if (foodIndex === foods.length) {
    return <Compelete />;
  }
  if (foodIndex < 0) {
    return <MenuLink to="ingredient" />;
  }

  return (
    <div className={classes.container}>
      <Cooking
        NextFoodIndexHandler={NextFoodIndexHandler}
        BeforeFoodIndexHandler={BeforeFoodIndexHandler}
      >
        <FoodItem
          key={selectedFood.id}
          id={selectedFood.id}
          description={selectedFood.description}
          img={selectedFood.img}
        />
        <div className="controlbutton">
          <Button
            variant="outlined"
            className={classes.button}
            onClick={BeforeFoodIndexHandler}
          >
            이전
          </Button>

          <Button
            variant="contained"
            className={classes.button}
            onClick={NextFoodIndexHandler}
          >
            다음
          </Button>
        </div>
      </Cooking>
    </div>
  );
};

export default CookingProcess;
