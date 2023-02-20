import React from "react";
import classes from "./Title.module.css";
import foodServing from "../assets/img/FoodServing.png";
import Button from "@mui/material/Button";

const Title = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>요리조리</div>
        <img src={foodServing} alt="foodServing" />
        <Button variant="contained" className={classes.button}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default Title;
