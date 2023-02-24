import React from "react";
import classes from "./Compelete.module.css";
import { Button } from "@mui/material";
import soybeansoup from "../../assets/img/된장찌개.jpg";
import ButtonLink from "../MenuLink/ButtonLink";

const Compelete = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>완성!</div>
      <div>
        <img src={soybeansoup} alt="soybean" className={classes.boximg} />
      </div>
      <ButtonLink to="/menu">
        <Button variant="contained" className={classes.materialbutton}>
          메뉴로
        </Button>
      </ButtonLink>
    </div>
  );
};

export default Compelete;
