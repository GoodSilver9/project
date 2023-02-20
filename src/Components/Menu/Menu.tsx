import React from "react";
import classes from "./Menu.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import soybeansoup from "../../assets/img/된장찌개.jpg";
import { Box } from "@mui/material";

const Menu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>오늘의 메뉴</div>
      <Card>
        <div className={classes.menu_foods}>
          <CardContent className={classes.cardfood}>
            <img src={soybeansoup} alt="soup" /> 된장찌개
          </CardContent>
        </div>
        <div className={classes.menu_foods}>
          <CardContent>김치찌개</CardContent>
        </div>
        <div className={classes.menu_foods}>
          <CardContent>제육볶음</CardContent>
        </div>
        <div className={classes.menu_foods}>
          <CardContent>미역국</CardContent>
        </div>
        <div className={classes.menu_foods}>
          <CardContent>카레</CardContent>
        </div>
        <div className={classes.menu_foods}>
          <CardContent>만둣국</CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Menu;
