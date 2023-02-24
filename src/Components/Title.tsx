import React, { useState } from "react";
import classes from "./Title.module.css";
import foodServing from "../assets/img/FoodServing.png";
import Button from "@mui/material/Button";
import ButtonLink from "./MenuLink/ButtonLink";

const Title = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>요리조리</div>
        <img src={foodServing} alt="foodServing" />
        <ButtonLink to="/menu">
          <Button variant="contained" className={classes.button}>
            시작하기
          </Button>
        </ButtonLink>
      </div>
    </div>
  );
};

export default Title;
