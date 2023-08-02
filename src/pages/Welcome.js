import React from "react";

import style from "../style/welcome.module.css";

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}></div>
    </div>
  );
}

export default Welcome;
