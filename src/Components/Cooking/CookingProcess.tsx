import React, { useState, useEffect } from "react";
import FoodItem from "../Food/FoodItem";
import Cooking from "./Cooking";
import Food from "../Interface/Interface";
import classes from "./CookingProcess.module.css";
import { Button } from "@mui/material";

const CookingProcess = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [foodId, setFoodId] = useState("f1");

  const NextFoodIdHandler = () => {
    setFoodId(foodId + 1);
  };

  useEffect(() => {
    const fecthFoods = async () => {
      const response = await fetch(
        "https://react-study-project-a16db-default-rtdb.firebaseio.com/soybeansoup.json"
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
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    console.log("loading...");
  }
  if (httpError) {
    console.log("에러!");
  }

  const f1Foods = foods.filter((food: any) => food.id === foodId);

  const foodsList = f1Foods.map((food: Food) => (
    <FoodItem
      key={food.id}
      id={food.id}
      description={food.description}
      img={food.img}
      foods={foods}
    />
  ));

  return (
    console.log(foodId),
    (
      <div className={classes.container}>
        <Cooking>{foodsList}</Cooking>
        <Button onClick={NextFoodIdHandler}>다음</Button>
      </div>
    )
  );
};

export default CookingProcess;
