import React from "react";
import classes from "./Cooking.module.css";
import { Button } from "@mui/material";
import CookingProcess from "../Cook/CookingProcess";
import ButtonLink from "../MenuLink/ButtonLink";

const Cooking = () => {
  return (
    <div className={classes.container}>
      <CookingProcess />
      <div className="controlbutton">
        <ButtonLink to="/ingredient">
          <Button variant="outlined" className={classes.button}>
            이전
          </Button>
        </ButtonLink>
        <ButtonLink to="/compelete">
          <Button variant="contained" className={classes.button}>
            다음
          </Button>
        </ButtonLink>
      </div>
    </div>
  );
};

export default Cooking;
