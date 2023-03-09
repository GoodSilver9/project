import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import classes from "./Ingredient.module.css";
import ButtonLink from "../MenuLink/ButtonLink";
import Needs from "./Needs";
import { useParams } from "react-router";

const Ingredient = () => {
  const [stuff, setStuff] = useState([]);

  const { menuName } = useParams();
  const foodName = `/cookingprocess/${menuName}`;

  useEffect(() => {
    const fetchIngredient = async () => {
      const response = await fetch(
        `https://react-study-project-a16db-default-rtdb.firebaseio.com/${menuName}/ingredient.json`
      );

      const responseData = await response.json();

      const loadedIngredients = [] as any;

      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          ingredient: responseData[key].ingredient,
        });
      }
      setStuff(loadedIngredients);
    };

    fetchIngredient().catch((error) => {});
  }, [menuName]);

  const needList = stuff.map((need: any) => {
    return <Needs ingredient={need.ingredient} />;
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>필요한 재료</div>
      <div className={classes.menuList}>{needList}</div>
      <ButtonLink to={foodName}>
        <Button variant="contained" className={classes.button}>
          시작하기
        </Button>
      </ButtonLink>
    </div>
  );
};

export default Ingredient;

/* <ButtonLink to="/cookingprocess/"></ButtonLink> */
// const Ingredient = () => {
//   return (
//     <div className={classes.container}>
//       <div className={classes.title}>필요한 재료</div>
//       <div className={classes.menuList}>
//         <li>양파 1/2</li>
//         <li>두부 1/2</li>
//         <li>감자 1/2</li>
//         <li>애호박 1/3</li>
//         <li>대파 1/2</li>
//         <li>청양고추 2개</li>
//         <li>된장 2스푼</li>
//         <li>다진마늘 1/2</li>
//         <li>고춧가루 1스푼</li>
//         <li>맛술 1스푼</li>
//         <li>쌈장 1스푼</li>
//         <li>미원 1/2스푼</li>
//       </div>
//       <ButtonLink to="/cookingprocess">
//         <Button variant="contained" className={classes.button}>
//           시작하기
//         </Button>
//       </ButtonLink>
//     </div>
//   );
// };
