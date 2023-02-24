import React from "react";
import classes from "./CookingProcess.module.css";
import soybeansoup from "../../assets/img/된장찌개.jpg";

const CookingProcess = () => {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <img className={classes.boximg} src={soybeansoup} alt="soybeansoup" />
        </div>
        <div className={classes.explanation}>
          <h1>1</h1>
          <p>물 550ml와 감자 1/2를 넣고 끓인다.</p>
        </div>
      </div>
    </div>
  );
};

export default CookingProcess;
