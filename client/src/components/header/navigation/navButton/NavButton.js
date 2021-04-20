import React from 'react';
import style from './NavButton.module.css';
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    return (
        <div className={style.navButton}>
            <NavLink activeClassName={style.active} to={props.path}>{props.description}</NavLink>
        </div>
    );
};

export default NavButton;