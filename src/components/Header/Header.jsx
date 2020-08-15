import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
return (
  <header className={s.header}>

      <div className={s.headerInImg}>
        <img src="https://html.crumina.net/html-olympus/img/logo.png" alt=""/>
      </div>
      <div className={s.headerInInput}>Input Aplication</div>
        <div className={s.headerLogin}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>
                Login
            </NavLink>}
        </div>

  </header>
);

}

export default Header
