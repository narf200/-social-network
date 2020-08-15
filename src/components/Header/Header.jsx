import React from "react";
import s from "./Header.module.css";

const Header = () => {
return (
  <header className={s.header}>

      <div className={s.headerInImg}>
        <img src="https://html.crumina.net/html-olympus/img/logo.png" alt=""/>
      </div>
      <div className={s.headerInInput}>Input Aplication</div>

  </header>
);

}

export default Header
