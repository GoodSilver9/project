import React from "react";
import classes from "./Cooking.module.css";
import { Button } from "@mui/material";
import ButtonLink from "../MenuLink/ButtonLink";

const Cooking = (props: any) => {
  return (
    <div className={classes.container}>
      {props.children}
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
