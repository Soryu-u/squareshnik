import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <h1>SQUARESHIK</h1>
        <div>tip</div>
      </div>
    </div>
  );
};
