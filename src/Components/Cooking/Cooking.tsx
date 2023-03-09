import React from "react";
import classes from "./Cooking.module.css";

const Cooking = (props: any) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default Cooking;

// if (props.index === props.length) {
//   return <ButtonLink to="compelete"></ButtonLink>;
// }
