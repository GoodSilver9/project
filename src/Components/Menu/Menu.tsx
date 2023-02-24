import React from "react";
import classes from "./Menu.module.css";
import soybeansoup from "../../assets/img/된장찌개.jpg";
import kimchisoup from "../../assets/img/김치찌개.jfif";
import stirFriedPork from "../../assets/img/제육볶음.jpg";
import seaweedsoup from "../../assets/img/미역국.jpg";
import curry from "../../assets/img/카레.jpg";
import dumplingsoup from "../../assets/img/만둣국.jpg";
import ButtonLink from "../MenuLink/ButtonLink";

const Menu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>오늘의 메뉴</div>
      <div className={classes.menucontainer}>
        <ButtonLink to="/ingredient">
          <div className={classes.menu_foods}>
            <img src={soybeansoup} alt="soybeansoup" /> 된장찌개
          </div>
        </ButtonLink>
        <div className={classes.menu_foods}>
          <img src={kimchisoup} alt="kimchisoup" />
          김치찌개
        </div>
        <div className={classes.menu_foods}>
          <img src={stirFriedPork} alt="friedpork" />
          제육볶음
        </div>
        <div className={classes.menu_foods}>
          <img src={seaweedsoup} alt="seaweedsoup" />
          미역국
        </div>
        <div className={classes.menu_foods}>
          <img src={curry} alt="curry" />
          카레
        </div>
        <div className={classes.menu_foods}>
          <img src={dumplingsoup} alt="dumplingsoup" />
          만둣국
        </div>
      </div>
    </div>
  );
};

export default Menu;
