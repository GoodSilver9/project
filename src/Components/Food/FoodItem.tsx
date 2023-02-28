import React, { useState, useEffect } from "react";
import Food from "../Interface/Interface";
import classes from "../Food/FoodItem.module.css";

const FoodItem = (props: Food) => {
  return (
    <div className={classes.container}>
      <img className={classes.boximg} src={props.img} alt="soybeansoup" />
      <p>{props.description}</p>
    </div>
  );
};

export default FoodItem;

// <div>
//       <div>
//         <img className={classes.boximg} src={soybeansoup} alt="soybeansoup" />
//       </div>
//       <div className={classes.explanation}>
//         <h1>1</h1>
//         <p>물 550ml와 감자 1/2를 넣고 끓인다.</p>
//       </div>
//     </div>

// const FoodItem = (props: Food) => {
//   const [filteredFood, setFilteredFood] = useState<Food | null>(null);

//   useEffect(() => {
//     const f1Food = props.find((food) => food.id === "f1");
//     setFilteredFood(f1Food || null);
//   }, [props]);

//   return (
//     <div className={classes.container}>
//       <img
//         className={classes.boximg}
//         src={filteredFood?.img}
//         alt="soybeansoup"
//       />
//       <h1>1</h1>
//       <p>{filteredFood?.description}</p>
//     </div>
//   );
// };
