import React from 'react';
import style from './Header.module.css';
import Navigation from "./navigation/Navigation";

const Header = (props) => {
    return (
        <div id={style.header}>
            <span className={style.logo}>{props.logo}</span>
            <Navigation routes={props.routes}/>
        </div>
    );
};

export default Header;